import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/!(disabledStories)/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  addons: ['@storybook/addon-docs', '@storybook/addon-themes', 'storybook-dark-mode'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      include: ['lib/**/*.tsx'],
      exclude: ['lib/**/*.test.tsx'],
      // Filter out third-party props from node_modules except typings.
      propFilter: (prop) => (prop.parent ? !/node_modules\/?@types/.test(prop.parent.fileName) : true),
    },
  },
};
export default config;
