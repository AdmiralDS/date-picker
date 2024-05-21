import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import pkg from './package.json';

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
  ],
  build: {
    copyPublicDir: false,
    sourcemap: true,
    // use vite library mode to build the package
    // https://vitejs.dev/guide/build.html#library-mode
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [...Object.keys(pkg.peerDependencies || {}), /dayjs/, 'react/jsx-runtime'],
      input: ['./src/index.ts'],
      output: [
        {
          dir: 'dist',
          entryFileNames: '[name].js',
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          sourcemap: true,
          interop: 'auto',
          assetFileNames: 'assets/[name][extname]',
        },
      ],
    },
  },
});
