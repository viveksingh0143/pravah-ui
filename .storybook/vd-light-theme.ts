import { create, themes, ThemeVars } from '@storybook/theming';

const commonThemeOptions = {
  // Base theme
  base: 'light',

  // Branding Information
  brandTitle: 'Pravah-UI',
  brandUrl: '/', //'https://example.com',
  brandImage: '/pravah-logo.png',
  brandTarget: '_self',
  
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Colors
  // colorPrimary: '#3A10E5',
  // colorSecondary: '#585C6D',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#ffffff',
  appBorderRadius: 4,
 
  // Text colors
  // textColor: '#10162F',
  // textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#efefef',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
};

const lightTheme: ThemeVars = create({
  ...commonThemeOptions,
  base: 'light',
  brandTitle: `${commonThemeOptions.brandTitle} - Light Mode`,
  appBg: '#efefef',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#efefef',
  inputBg: '#ffffff',
  inputBorder: '#efefef',
  inputTextColor: '#10162F',
});

const darkTheme: ThemeVars = create({
  ...commonThemeOptions,
  base: 'dark',
  brandTitle: `${commonThemeOptions.brandTitle} - Dark Mode`,
  appBg: '#474747',
  appContentBg: '#1e1e1e',
  appPreviewBg: '#1e1e1e',
  appBorderColor: '#0e0e0e',
  inputBg: '#0e0e0e',
  inputBorder: '#0e0e0e',
  inputTextColor: '#afafaf',
});

export const vdTheme = (isDark: boolean): ThemeVars => (isDark ? darkTheme : lightTheme);

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'VD theme for LIT 3 components',
    defaultValue: 'dark',
    // toolbar: {
    //   icon: 'circlehollow',
    //   items: ['light', 'dark'],
    //   showName: true,
    // },
  },
};
