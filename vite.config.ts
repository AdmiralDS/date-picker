/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'happy-dom',
    setupFiles: ['./.test/setup.ts'],
    globals: true,
  },
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
    dts({ rollupTypes: true, tsconfigPath: './tsconfig.build.json' }),
  ],
  build: {
    copyPublicDir: false,
    sourcemap: true,
    // use vite library mode to build the package
    // https://vitejs.dev/guide/build.html#library-mode
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [...Object.keys(pkg.peerDependencies || {}).map((dep) => new RegExp(dep))],
      // input: ['./src/index.ts'],
      // output: [
      //   {
      //     dir: 'dist',
      //     entryFileNames: '[name].js',
      //     format: 'es',
      //     preserveModules: true,
      //     preserveModulesRoot: 'src',
      //     interop: 'auto',
      //     assetFileNames: 'assets/[name][extname]',
      //   },
      // ],
    },
  },
});
