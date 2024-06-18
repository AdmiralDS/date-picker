import { extname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync, readdirSync, rmSync } from 'node:fs';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { glob } from 'glob';
import pkg from './package.json';
import dts from 'vite-plugin-dts';

emptyDir(resolve(__dirname, 'dist'));
emptyDir(resolve(__dirname, 'types'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ plugins: [['@swc/plugin-styled-components', {}]] }),
    svgr({
      svgrOptions: {
        dimensions: false,
        svgProps: {
          focusable: '{false}',
        },
      },
    }),
    tsconfigPaths(),
    dts({ tsconfigPath: 'tsconfig.build.json' }),
  ],
  build: {
    sourcemap: true,
    copyPublicDir: false,
    // use vite library mode to build the package
    // https://vitejs.dev/guide/build.html#library-mode
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies || {}), 'react/jsx-runtime'],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob
          .sync('lib/**/*.{ts,tsx}', {
            ignore: ['lib/**/*.d.ts', 'lib/**/*.test.*'],
          })
          .map((file) => [
            // 1. The name of the entry point
            // lib/nested/foo.js becomes nested/foo
            relative('lib', file.slice(0, file.length - extname(file).length)),
            // 2. The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
});

function emptyDir(dir: string) {
  if (!existsSync(dir)) {
    return;
  }

  for (const file of readdirSync(dir)) {
    rmSync(resolve(dir, file), { recursive: true, force: true });
  }
}
