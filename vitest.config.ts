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
      pool: 'vmThreads',
      // deps: { web: { transformCss: true } }, // https://vitest.dev/config/#deps-web-transformcss
      // server: { deps: { inline: ['@receter/my-component-library'] } },
    },
  }),
);
