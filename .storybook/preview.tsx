import { useEffect, useRef } from 'react';
import type { Preview } from '@storybook/react';
import { createGlobalStyle, styled, ThemeProvider } from 'styled-components';
import { useGlobals } from 'storybook/preview-api';
import { lightThemeClassName, darkThemeClassName, vars } from '@admiral-ds/web';

import {
  DARK_THEME,
  LIGHT_THEME,
  FontsVTBGroup,
  DropdownProvider,
  LightThemeCssVars,
  DarkThemeCssVars,
} from '@admiral-ds/react-ui';

import { DocsThemeContainer } from './DocsThemeContainer';
import { isStorybookTheme, type StorybookTheme } from './storybookThemes';

const GlobalStyles = createGlobalStyle`
    body {
      background-color: ${vars.color.Neutral_Neutral00};
    }
`;

function ThemeWrapper(props: { theme: StorybookTheme; CSSCustomProps: boolean; children: React.ReactNode }) {
  const isDark = props.theme === 'dark';

  useEffect(() => {
    // document.body refers to body tag inside iframe#storybook-preview-iframe
    document.body.classList.add(...(isDark ? darkThemeClassName : lightThemeClassName).split(' '));
    document.body.classList.remove(...(isDark ? lightThemeClassName : darkThemeClassName).split(' '));
  }, [isDark]);

  const renderCssProps = () => (isDark ? <DarkThemeCssVars /> : <LightThemeCssVars />);

  // render your custom theme provider
  return (
    <ThemeProvider theme={isDark ? DARK_THEME : LIGHT_THEME}>
      {props.CSSCustomProps && renderCssProps()}
      {props.children}
    </ThemeProvider>
  );
}

const StoryContainer = styled.div`
  padding: 3em;
  background-color: ${vars.color.Neutral_Neutral00};
`;

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    options: {
      storySort: {
        includeName: true,
        locales: 'en-US',
        order: ['Admiral-2.1', ['Date Picker', 'Range Picker', 'Double Range Picker', 'Widgets']],
      },
    },
    actions: { disabled: true },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
    docs: {
      container: DocsThemeContainer,
    },
  },
  decorators: [
    (renderStory, context) => {
      const [{ CSSCustomProps, theme }] = useGlobals();
      const selectedTheme = isStorybookTheme(theme) ? theme : 'light';

      const refDropdown = useRef<HTMLDivElement | null>(null);

      useEffect(() => {
        const iframeDoc = document;
        const portalRoot = iframeDoc.createElement('div');
        portalRoot.id = context.id;
        iframeDoc.body.appendChild(portalRoot);
        refDropdown.current = portalRoot;

        return () => {
          // Очистка при размонтировании
          iframeDoc.body.removeChild(portalRoot);
        };
      }, []);

      return (
        <ThemeWrapper theme={selectedTheme} CSSCustomProps={CSSCustomProps === true || CSSCustomProps === 'true'}>
          <GlobalStyles />
          <DropdownProvider rootRef={refDropdown}>
            <StoryContainer id={'story-container'}>{renderStory()}</StoryContainer>
          </DropdownProvider>
        </ThemeWrapper>
      );
    },
    (Story) => (
      <>
        <FontsVTBGroup />
        <Story />
      </>
    ),
  ],
  initialGlobals: {
    theme: 'light',
  },
  globalTypes: {
    theme: {
      description: 'Preview theme',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    CSSCustomProps: {
      defaultValue: false,
      toolbar: {
        title: 'CSS Custom Props',
        items: [
          { value: 'true', title: 'Enable css custom props', icon: 'passed' },
          { value: 'false', title: 'Disable css custom props', icon: 'failed' },
        ],
      },
    },
  },
};

export default preview;
