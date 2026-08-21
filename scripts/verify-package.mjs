#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { access, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';

// Все пути вычисляются относительно расположения скрипта, чтобы проверка одинаково
// работала из npm scripts, CI и при ручном запуске из другого каталога.
const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const packageJson = JSON.parse(await readFile(join(rootDir, 'package.json'), 'utf8'));
const packageName = packageJson.name;

// Consumer создаётся внутри корневого node_modules. Благодаря этому установленный
// tarball изолирован от package self-reference, но может разрешать peer dependencies
// из node_modules проекта без их повторной установки и обращения к npm registry.
const temporaryRoot = join(rootDir, 'node_modules', '.tmp');

// package.json#files разрешает публиковать dist. Дополнительный allowlist защищает
// от случайного расширения publish-состава при будущих изменениях manifest или npm.
const allowedPackageFiles = new Set(['README.md', 'license', 'package.json']);
const forbiddenPathParts = ['/__snapshots__/', '.test.', '.stories.', '.template.'];

// Небольшой набор стабильных runtime-экспортов используется во всех consumer fixtures.
// Он проверяет основные семейства компонентов, не дублируя полный публичный API вручную.
const expectedPublicExports = ['DatePicker', 'DateRangePicker', 'MonthPicker', 'YearPicker'];

const formatProjectPath = (filePath) => relative(rootDir, filePath) || '.';

// npm 10 может запускать prepare для npm pack даже с --ignore-scripts и добавлять
// вывод сборки перед JSON. Берём последний корректный JSON-массив из stdout, чтобы
// проверка одинаково работала с npm 10 и npm 11.
const parsePackOutput = (output) => {
  const jsonStarts = [0];
  let nextJsonStart = output.indexOf('\n[');

  while (nextJsonStart >= 0) {
    jsonStarts.push(nextJsonStart + 1);
    nextJsonStart = output.indexOf('\n[', nextJsonStart + 2);
  }

  for (const jsonStart of jsonStarts.reverse()) {
    const candidate = output.slice(jsonStart).trim();
    try {
      const parsedOutput = JSON.parse(candidate);
      if (Array.isArray(parsedOutput)) return parsedOutput;
    } catch {
      // Текущая позиция может указывать на строку лога, начинающуюся с `[`. Ищем
      // предыдущий массив, пока не дойдём до JSON metadata от npm pack.
    }
  }

  throw new Error('npm pack did not return valid JSON metadata.');
};

/**
 * Возвращает все строковые targets из package.json#exports.
 *
 * Обход рекурсивный, потому что root export содержит вложенные import/require,
 * а внутри каждой ветви находятся отдельные types/default conditions.
 */
const collectExportTargets = (value) => {
  if (typeof value === 'string') return [value];
  if (!value || typeof value !== 'object') return [];
  return Object.values(value).flatMap(collectExportTargets);
};

/**
 * Проверяет фактический publish-состав, сформированный npm pack.
 *
 * Проверки локальной файловой системы недостаточно: файл может существовать в dist,
 * но не попасть в tarball из-за package.json#files или npm ignore rules. Поэтому и
 * allowlist, и export targets сверяются со списком packageInfo.files от самого npm.
 */
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

/** Собирает список сгенерированных файлов с указанным расширением рекурсивно. */
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

/**
 * Проверяет расширения и существование локальных imports/requires собранного графа.
 *
 * ESM-файлы должны ссылаться на .js, CJS-файлы — на .cjs. Это предотвращает
 * регрессию, при которой Rollup создаёт корректный main entrypoint, но один из
 * сохранённых внутренних модулей содержит ссылку на файл другого формата.
 * Внешние package imports здесь не проверяются: они валидируются consumer-сборкой.
 */
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
  // NodeNext выбирает conditions по расширению consumer-файла: .mts должен получить
  // ESM main.d.ts, а .cts — CJS main.d.cts. Таким образом один запуск проверяет обе
  // type-ветви package.json#exports и наличие заявленных публичных типов.
  //
  // skipLibCheck необходим из-за деклараций peer dependencies: например,
  // @admiral-ds/react-ui ссылается на опциональные внешние типы. Разрешение entrypoint
  // и проверка импортируемых контрактов пакета при этом продолжают выполняться.
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
  // Peer dependencies не включаются в синтетический bundle. Задача этой проверки —
  // подтвердить разрешение и преобразование опубликованного кода date-picker, а не
  // повторно собрать React и Admiral DS. Subpath imports тоже считаются external.
  const peerDependencies = Object.keys(packageJson.peerDependencies ?? {});

  // write:false оставляет проверку без артефактов: успешное завершение Rollup означает,
  // что весь доступный module graph consumer-а разрешён и может быть собран.
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
  // Первый pack работает в dry-run режиме: он быстро и без создания tgz возвращает
  // точный список файлов, размер и metadata будущей публикации.
  const dryRunOutput = execFileSync('npm', ['pack', '--dry-run', '--json', '--ignore-scripts'], {
    cwd: rootDir,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const packageInfo = parsePackOutput(dryRunOutput).at(0);
  if (!packageInfo) throw new Error('npm pack --dry-run did not return package metadata.');

  // Ошибки состава и обоих module graphs накапливаются, чтобы один запуск показывал
  // все найденные проблемы, а не останавливался на первом отсутствующем файле.
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

  // Второй pack создаёт настоящий tgz. Именно его получает consumer ниже, поэтому
  // дальнейшие проверки не могут случайно разрешить исходники через tsconfig paths
  // или package self-reference текущего рабочего репозитория.
  const packOutput = execFileSync('npm', ['pack', '--json', '--ignore-scripts', '--pack-destination', consumerRoot], {
    cwd: rootDir,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const packedFileName = parsePackOutput(packOutput).at(0)?.filename;
  if (!packedFileName) throw new Error('npm pack did not return the generated tarball name.');

  // --legacy-peer-deps не устанавливает peers внутрь временного consumer-а. Они
  // разрешаются из родительского node_modules, а lockfile рабочего проекта не меняется.
  // --ignore-scripts гарантирует, что проверяется уже собранный tarball без prepare.
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

  // Простого наличия target недостаточно для CJS: createRequire.resolve подтверждает,
  // что Node condition resolver действительно выбирает require.default, а не ESM branch.
  await Promise.all([access(esmTarget), access(cjsTarget)]);
  const consumerRequire = createRequire(join(consumerRoot, 'package.json'));
  if (consumerRequire.resolve(packageName) !== cjsTarget) {
    throw new Error('The require condition does not resolve to the published CJS entrypoint.');
  }

  const esmFixture = join(consumerRoot, 'consumer.mjs');
  const cjsFixtureDirectory = join(consumerRoot, 'node_modules', 'date-picker-cjs-consumer');
  const cjsFixture = join(cjsFixtureDirectory, 'index.cjs');
  const esmTypeFixture = join(consumerRoot, 'consumer.mts');
  const cjsTypeFixture = join(consumerRoot, 'consumer.cts');

  // Vite преобразует CommonJS dependencies из node_modules. Размещение CJS fixture
  // в синтетическом package внутри node_modules моделирует реальную CJS-зависимость,
  // которая вызывает require('@admiral-ds/date-picker'), и заставляет bundler пройти
  // через require condition и опубликованный CJS graph целиком.
  await mkdir(cjsFixtureDirectory, { recursive: true });

  // Runtime fixtures используют импорты в выражении console.log, чтобы Rollup не мог
  // удалить их как неиспользуемые и был вынужден разрешить соответствующий graph.
  await writeFile(
    esmFixture,
    `import { ${expectedPublicExports.join(', ')} } from '${packageName}';\nconsole.log(${expectedPublicExports.join(', ')});\n`,
    'utf8',
  );

  await writeFile(
    cjsFixture,
    `const { ${expectedPublicExports.join(', ')} } = require('${packageName}');\nconsole.log(${expectedPublicExports.join(', ')});\n`,
    'utf8',
  );

  // Type fixtures отдельно проверяют value и type exports. CJS использует import =
  // require, поэтому TypeScript обязан выбрать main.d.cts из require.types.
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
  await buildConsumerEntrypoint(consumerRoot, cjsFixture, 'CJS require()');

  console.log(
    `Package verification passed: ${packageInfo.files.length} files, ${(packageInfo.unpackedSize / 1024).toFixed(1)} KiB unpacked.`,
  );
} finally {
  // Временный consumer и tgz удаляются как после успеха, так и при ошибке любой проверки.
  await rm(consumerRoot, { recursive: true, force: true });
}
