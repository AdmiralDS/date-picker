import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'happy-dom',
      setupFiles: ['./.test/setup.ts'],
      globals: true,
      // css: { include: /.+/ }, // https://vitest.dev/config/#css
      // deps: { web: { transformCss: false } }, // https://vitest.dev/config/#deps-web-transformcss
      // server: { deps: { inline: ['@receter/my-component-library'] } },
    },
  }),
);
