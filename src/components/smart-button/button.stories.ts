import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { SMART_BUTTON_SIZES, SMART_BUTTON_VARIANTS, DEFAULT_SMART_BUTTON_PROPS } from './constants';
import './button';

// More information about available options:
// https://storybook.js.org/docs/web-components/api/csf
const meta = {
  title: 'Components/SmartButton',
  component: 'ui-smart-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: SMART_BUTTON_VARIANTS,
      description: 'The visual style of the button',
      table: {
        defaultValue: { summary: DEFAULT_SMART_BUTTON_PROPS.variant },
      },
    },
    size: {
      control: { type: 'select' },
      options: SMART_BUTTON_SIZES,
      description: 'The size of the button',
      table: {
        defaultValue: { summary: DEFAULT_SMART_BUTTON_PROPS.size },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: DEFAULT_SMART_BUTTON_PROPS.disabled.toString() },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// More information about available options:
// https://storybook.js.org/docs/web-components/writing-stories/introduction
export const Primary: Story = {
  args: {
    ...DEFAULT_SMART_BUTTON_PROPS,
    variant: 'primary',
  },
  render: (args) => html`
    <ui-smart-button 
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
    >
      SmartButton
    </ui-smart-button>
  `,
};

export const Secondary: Story = {
  args: {
    ...DEFAULT_SMART_BUTTON_PROPS,
    variant: 'secondary',
  },
  render: Primary.render,
};

export const Outline: Story = {
  args: {
    ...DEFAULT_SMART_BUTTON_PROPS,
    variant: 'outline',
  },
  render: Primary.render,
};

export const Sizes: Story = {
  args: {
    ...(() => {
      const { size, ...rest } = DEFAULT_SMART_BUTTON_PROPS;
      return rest;
    })(),
  },
  render: (args) => html`
    <div class="flex gap-4 items-center">
      ${SMART_BUTTON_SIZES.map(size => html`
        <ui-smart-button 
          variant=${args.variant}
          size=${size}
          ?disabled=${args.disabled}
        >
          ${size}
        </ui-smart-button>
      `)}
    </div>
  `
};