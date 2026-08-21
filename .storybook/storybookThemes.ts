export type StorybookTheme = 'light' | 'dark';

const storybookThemes: StorybookTheme[] = ['light', 'dark'];

export const isStorybookTheme = (theme: unknown): theme is StorybookTheme => {
  return typeof theme === 'string' && storybookThemes.includes(theme as StorybookTheme);
};
