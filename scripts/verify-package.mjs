import { access, readFile } from 'node:fs/promises';
import { build } from 'vite';

const entrypoints = {
  esm: './dist/esm/main.js',
  cjs: './dist/cjs/main.cjs',
  types: './dist/types/main.d.ts',
};

await Promise.all(Object.values(entrypoints).map((entrypoint) => access(entrypoint)));

const cjsSource = await readFile(entrypoints.cjs, 'utf8');
if (/require\(["'][^"']+\.js["']\)/.test(cjsSource)) {
  throw new Error('CommonJS entrypoint contains an internal .js require');
}

for (const [format, entry] of Object.entries({ esm: entrypoints.esm, cjs: entrypoints.cjs })) {
  await build({
    configFile: false,
    logLevel: 'warn',
    build: {
      write: false,
      lib: {
        entry,
        formats: ['es'],
      },
    },
  });
  console.log(`Verified ${format.toUpperCase()} entrypoint: ${entry}`);
}

console.log(`Verified type declarations: ${entrypoints.types}`);
