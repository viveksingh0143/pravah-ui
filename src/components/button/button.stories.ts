import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BUTTON_SIZES, BUTTON_VARIANTS, DEFAULT_BUTTON_PROPS } from './constants';
import './button';

// More information about available options:
// https://storybook.js.org/docs/web-components/api/csf
const meta = {
  title: 'Components/Button',
  component: 'ui-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: BUTTON_VARIANTS,
      description: 'The visual style of the button',
      table: {
        defaultValue: { summary: DEFAULT_BUTTON_PROPS.variant },
      },
    },
    size: {
      control: { type: 'select' },
      options: BUTTON_SIZES,
      description: 'The size of the button',
      table: {
        defaultValue: { summary: DEFAULT_BUTTON_PROPS.size },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: DEFAULT_BUTTON_PROPS.disabled.toString() },
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
    ...DEFAULT_BUTTON_PROPS,
    variant: 'primary',
  },
  render: (args) => html`
    <ui-button 
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
    >
      Button
    </ui-button>
  `,
};

export const Secondary: Story = {
  args: {
    ...DEFAULT_BUTTON_PROPS,
    variant: 'secondary',
  },
  render: Primary.render,
};

export const Outline: Story = {
  args: {
    ...DEFAULT_BUTTON_PROPS,
    variant: 'outline',
  },
  render: Primary.render,
};

export const Sizes: Story = {
  args: {
    ...(() => {
      const { size, ...rest } = DEFAULT_BUTTON_PROPS;
      return rest;
    })(),
  },
  render: (args) => html`
    <div class="flex gap-4 items-center">
      ${BUTTON_SIZES.map(size => html`
        <ui-button 
          variant=${args.variant}
          size=${size}
          ?disabled=${args.disabled}
        >
          ${size}
        </ui-button>
      `)}
    </div>
  `
};