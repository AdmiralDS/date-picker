import * as React from 'react';
import { useEffect } from 'react';
import type { Preview } from '@storybook/react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { DocsContainer } from '@storybook/addon-docs';
import { useGlobals } from '@storybook/preview-api';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import {
  DARK_THEME,
  LIGHT_THEME,
  FontsVTBGroup,
  DropdownProvider,
  LightThemeCssVars,
  DarkThemeCssVars,
} from '@admiral-ds/react-ui';

const GlobalStyles = createGlobalStyle`
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    html {
      background-color: ${(props) => props.theme.color['Neutral/Neutral 00']};
    }
`;

// create a component that uses the dark mode hook
function ThemeWrapper(props) {
  // this example uses hook but you can also use class component as well
  const isDark = useDarkMode();

  useEffect(() => {
    // document.body refers to body tag inside iframe#storybook-preview-iframe
    document.body.classList.add(`admiral-theme-${isDark ? 'dark' : 'light'}`);
    document.body.classList.remove(`admiral-theme-${isDark ? 'light' : 'dark'}`);
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
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
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
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      container: (props) => {
        const theme = useDarkMode() ? themes.dark : themes.normal;
        return <DocsContainer {...props} theme={theme} />;
      },
    },
  },
  decorators: [
    (renderStory) => {
      const [{ CSSCustomProps }] = useGlobals();
      return (
        <ThemeWrapper CSSCustomProps={CSSCustomProps}>
          <GlobalStyles />
          <DropdownProvider>
            <StoryContainer>{renderStory()}</StoryContainer>
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
  globalTypes: {
    CSSCustomProps: {
      defaultValue: false,
      toolbar: {
        title: 'CSS Custom Props',
        items: [
          { value: true, title: 'Enable css custom props', icon: 'passed' },
          { value: false, title: 'Disable css custom props', icon: 'failed' },
        ],
      },
    },
  },
};

export default preview;
