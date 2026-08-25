import { useEffect, useState } from 'react';

import { DocsContainer } from '@storybook/addon-docs/blocks';
import type { DocsContainerProps } from '@storybook/addon-docs/blocks';
import { GLOBALS_UPDATED } from 'storybook/internal/core-events';
import { themes } from 'storybook/theming';

import { isStorybookTheme, type StorybookTheme } from './storybookThemes';

const getInitialTheme = (context: DocsContainerProps['context']): StorybookTheme => {
  try {
    const story = context.storyById();
    const theme = context.getStoryContext(story).globals.theme;

    return isStorybookTheme(theme) ? theme : 'light';
  } catch {
    return 'light';
  }
};

export const DocsThemeContainer = (props: DocsContainerProps) => {
  const [selectedTheme, setSelectedTheme] = useState<StorybookTheme>(() => getInitialTheme(props.context));

  useEffect(() => {
    const handleGlobalsUpdated = ({ globals }: { globals: { theme?: unknown } }) => {
      setSelectedTheme(isStorybookTheme(globals.theme) ? globals.theme : 'light');
    };

    props.context.channel.on(GLOBALS_UPDATED, handleGlobalsUpdated);
    return () => props.context.channel.off(GLOBALS_UPDATED, handleGlobalsUpdated);
  }, [props.context.channel]);

  return <DocsContainer {...props} theme={themes[selectedTheme]} />;
};
