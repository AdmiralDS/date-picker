#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { access, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const packageJson = JSON.parse(await readFile(join(rootDir, 'package.json'), 'utf8'));
const packageName = packageJson.name;
const temporaryRoot = join(rootDir, 'node_modules', '.tmp');
const allowedPackageFiles = new Set(['README.md', 'license', 'package.json']);
const forbiddenPathParts = ['/__snapshots__/', '.test.', '.stories.', '.template.'];
const expectedPublicExports = ['DatePicker', 'DateRangePicker', 'MonthPicker', 'YearPicker'];

const formatProjectPath = (filePath) => relative(rootDir, filePath) || '.';

/** Возвращает все строковые targets из вложенного package.json#exports. */
const collectExportTargets = (value) => {
  if (typeof value === 'string') return [value];
  if (!value || typeof value !== 'object') return [];
  return Object.values(value).flatMap(collectExportTargets);
};

/** Проверяет фактический publish-состав, сформированный npm pack. */
const validatePackContents = (packageInfo) => {
  const packageFiles = new Set(packageInfo.files.map(({ path }) => path.replaceAll('\\', '/')));
  const errors = [];

  for (const packagePath of packageFiles) {
    if (!allowedPackageFiles.has(packagePath) && !packagePath.startsWith('dist/')) {
      errors.push(`${packagePath} is outside the allowed publish roots.`);
    }
    if (forbiddenPathParts.some((part) => packagePath.includes(part))) {
      errors.push(`${packagePath} is a development or test artifact.`);
    }
  }

  const targets = new Set([...collectExportTargets(packageJson.exports), packageJson.main, packageJson.types]);
  for (const target of targets) {
    if (typeof target !== 'string') continue;
    const packageTarget = target.replace(/^\.\//, '').replaceAll('\\', '/');
    if (!packageFiles.has(packageTarget)) errors.push(`${target} is missing from the npm tarball.`);
  }

  return errors;
};

/** Собирает список файлов с указанным расширением рекурсивно. */
const findFiles = async (directory, extension) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map((entry) => {
      const entryPath = join(directory, entry.name);
      return entry.isDirectory() ? findFiles(entryPath, extension) : entry.name.endsWith(extension) ? [entryPath] : [];
    }),
  );
  return nestedFiles.flat();
};

/** Проверяет расширения и существование всех локальных imports/requires собранного графа. */
const validateInternalModuleGraph = async (directory, extension, pattern) => {
  const errors = [];
  const files = await findFiles(directory, extension);

  for (const filePath of files) {
    const source = await readFile(filePath, 'utf8');
    for (const match of source.matchAll(pattern)) {
      const specifier = match.groups?.specifier;
      if (!specifier?.startsWith('.')) continue;
      if (!specifier.endsWith(extension)) {
        errors.push(`${formatProjectPath(filePath)} references ${specifier} instead of a ${extension} file.`);
        continue;
      }
      try {
        await access(resolve(dirname(filePath), specifier));
      } catch {
        errors.push(`${formatProjectPath(filePath)} references missing ${specifier}.`);
      }
    }
  }

  return errors;
};

const runTypeScriptConsumerCheck = (consumerRoot, fixturePaths) => {
  execFileSync(
    join(rootDir, 'node_modules', 'typescript', 'bin', 'tsc'),
    [
      '--noEmit',
      '--module',
      'NodeNext',
      '--moduleResolution',
      'NodeNext',
      '--target',
      'ES2020',
      '--jsx',
      'react-jsx',
      '--strict',
      '--skipLibCheck',
      ...fixturePaths,
    ],
    { cwd: consumerRoot, stdio: 'inherit' },
  );
};

const buildConsumerEntrypoint = async (consumerRoot, entry, format) => {
  const peerDependencies = Object.keys(packageJson.peerDependencies ?? {});
  await build({
    configFile: false,
    root: consumerRoot,
    logLevel: 'warn',
    build: {
      write: false,
      lib: { entry, formats: ['es'] },
      rollupOptions: {
        external: (id) => peerDependencies.some((dependency) => id === dependency || id.startsWith(`${dependency}/`)),
      },
    },
  });
  console.log(`Verified ${format} consumer bundle.`);
};

await mkdir(temporaryRoot, { recursive: true });
const consumerRoot = await mkdtemp(join(temporaryRoot, 'package-check-'));

try {
  const dryRunOutput = execFileSync('npm', ['pack', '--dry-run', '--json', '--ignore-scripts'], {
    cwd: rootDir,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const packageInfo = JSON.parse(dryRunOutput).at(0);
  if (!packageInfo) throw new Error('npm pack --dry-run did not return package metadata.');

  const graphErrors = [
    ...validatePackContents(packageInfo),
    ...(await validateInternalModuleGraph(
      join(rootDir, 'dist', 'esm'),
      '.js',
      /(?:from\s*|import\s*)["'](?<specifier>[^"']+)["']/g,
    )),
    ...(await validateInternalModuleGraph(
      join(rootDir, 'dist', 'cjs'),
      '.cjs',
      /require\(["'](?<specifier>[^"']+)["']\)/g,
    )),
  ];
  if (graphErrors.length > 0) {
    throw new Error(`Package validation failed:\n- ${graphErrors.join('\n- ')}`);
  }

  await writeFile(
    join(consumerRoot, 'package.json'),
    `${JSON.stringify({ name: 'date-picker-package-consumer', private: true, type: 'module' }, null, 2)}\n`,
    'utf8',
  );

  const packOutput = execFileSync('npm', ['pack', '--json', '--ignore-scripts', '--pack-destination', consumerRoot], {
    cwd: rootDir,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const packedFileName = JSON.parse(packOutput).at(0)?.filename;
  if (!packedFileName) throw new Error('npm pack did not return the generated tarball name.');

  execFileSync(
    'npm',
    [
      'install',
      '--ignore-scripts',
      '--legacy-peer-deps',
      '--no-audit',
      '--no-fund',
      '--no-package-lock',
      '--no-save',
      join(consumerRoot, packedFileName),
    ],
    { cwd: consumerRoot, stdio: 'ignore' },
  );

  const installedPackageDir = join(consumerRoot, 'node_modules', ...packageName.split('/'));
  const installedPackageJson = JSON.parse(await readFile(join(installedPackageDir, 'package.json'), 'utf8'));
  const esmTarget = resolve(installedPackageDir, installedPackageJson.exports['.'].import.default);
  const cjsTarget = resolve(installedPackageDir, installedPackageJson.exports['.'].require.default);
  await Promise.all([access(esmTarget), access(cjsTarget)]);
  const consumerRequire = createRequire(join(consumerRoot, 'package.json'));
  if (consumerRequire.resolve(packageName) !== cjsTarget) {
    throw new Error('The require condition does not resolve to the published CJS entrypoint.');
  }

  const esmFixture = join(consumerRoot, 'consumer.mjs');
  const esmTypeFixture = join(consumerRoot, 'consumer.mts');
  const cjsTypeFixture = join(consumerRoot, 'consumer.cts');
  await writeFile(
    esmFixture,
    `import { ${expectedPublicExports.join(', ')} } from '${packageName}';\nconsole.log(${expectedPublicExports.join(', ')});\n`,
    'utf8',
  );
  await writeFile(
    esmTypeFixture,
    `import { DatePicker, type DatePickerProps } from '${packageName}';\nconst component: typeof DatePicker = DatePicker;\nconst props = {} as DatePickerProps;\nconsole.log(component, props);\n`,
    'utf8',
  );
  await writeFile(
    cjsTypeFixture,
    `import DatePickerPackage = require('${packageName}');\nconst component: typeof DatePickerPackage.DatePicker = DatePickerPackage.DatePicker;\ntype Props = DatePickerPackage.DatePickerProps;\nconst props = {} as Props;\nconsole.log(component, props);\n`,
    'utf8',
  );

  runTypeScriptConsumerCheck(consumerRoot, [esmTypeFixture, cjsTypeFixture]);
  await buildConsumerEntrypoint(consumerRoot, esmFixture, 'ESM');
  await buildConsumerEntrypoint(consumerRoot, cjsTarget, 'CJS');

  console.log(
    `Package verification passed: ${packageInfo.files.length} files, ${(packageInfo.unpackedSize / 1024).toFixed(1)} KiB unpacked.`,
  );
} finally {
  await rm(consumerRoot, { recursive: true, force: true });
}
