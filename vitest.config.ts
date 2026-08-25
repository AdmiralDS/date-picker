import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';
import releaseScope from './config/release-scope.json';

process.env.TZ = 'Europe/Moscow';

const excludedComponentTests = releaseScope.excludedComponents.map(
  (componentName) => `lib/components/${componentName}/**`,
);

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'happy-dom',
      setupFiles: ['./.test/setup.ts'],
      globals: true,
      exclude: [...configDefaults.exclude, ...excludedComponentTests],
      // css: { include: /.+/ }, // https://vitest.dev/config/#css
      pool: 'vmThreads',
      // deps: { web: { transformCss: true } }, // https://vitest.dev/config/#deps-web-transformcss
      // server: { deps: { inline: ['@receter/my-component-library'] } },
    },
  }),
);
