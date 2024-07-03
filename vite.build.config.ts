import { resolve } from 'node:path';
import { existsSync, readdirSync, rmSync } from 'node:fs';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import pkg from './package.json';
import dts from 'vite-plugin-dts';

emptyDir(resolve(__dirname, 'dist'));

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
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies || {}), 'react/jsx-runtime'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'lib',
        interop: 'auto',
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
