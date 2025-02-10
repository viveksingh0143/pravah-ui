import { addons } from '@storybook/manager-api';
// import { themes } from '@storybook/theming';
import { vdTheme } from './vd-light-theme';
 
addons.setConfig({
  // theme: themes.dark,
  themes: vdTheme,
});
