import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../../components/elements/button/vd-button';
import type { ButtonProps } from '../../components/elements/button/vd-button';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: 'vd-button',
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'error', 'warning', 'success', 'info'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    rounded: { control: 'select', options: ['sm', 'md', 'lg', 'circle', 'none'] },
    disabled: { control: 'boolean' },
    lIcon: { control: 'text' },
    rIcon: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  render: (args) => html`
    <vd-button 
      .variant=${args.variant} 
      .size=${args.size} 
      .rounded=${args.rounded} 
      ?disabled=${args.disabled}
    >
      ${args.lIcon ? html`<span slot="l-icon">${args.lIcon}</span>` : ''}
      ${args.children || 'Click Me'}
      ${args.rIcon ? html`<span slot="r-icon">${args.rIcon}</span>` : ''}
    </vd-button>
  `,
  args: {
    variant: 'primary',
    size: 'md',
    rounded: 'md',
    disabled: false,
    lIcon: '',
    rIcon: '',
    children: 'Click Me',
  },
};
