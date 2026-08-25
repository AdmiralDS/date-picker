import { useEffect } from 'react';

import { addons, types, useGlobals } from 'storybook/manager-api';
import { themes } from 'storybook/theming';

import { isStorybookTheme, type StorybookTheme } from './storybookThemes';

const setManagerTheme = (theme: unknown) => {
  const selectedTheme: StorybookTheme = isStorybookTheme(theme) ? theme : 'light';

  addons.setConfig({ theme: themes[selectedTheme] });
};

setManagerTheme('light');

const ThemeSyncTool = () => {
  const [globals] = useGlobals();

  useEffect(() => {
    setManagerTheme(globals.theme);
  }, [globals.theme]);

  return null;
};

addons.register('admiral-theme-sync', () => {
  addons.add('admiral-theme-sync/tool', {
    title: 'Admiral theme sync',
    type: types.TOOL,
    match: ({ viewMode, tabId }) => !!(viewMode?.match(/^(story|docs)$/) && !tabId),
    render: ThemeSyncTool,
  });
});
