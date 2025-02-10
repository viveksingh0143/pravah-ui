
import { themes } from '@storybook/theming';
import type { Preview } from "@storybook/web-components";
import { vdTheme, parameters, globalTypes } from './vd-light-theme';

const preview: Preview = {
  parameters,
  globalTypes,
};

export default preview;
