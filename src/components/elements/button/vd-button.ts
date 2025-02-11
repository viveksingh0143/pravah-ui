import { LitElement, html, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { globalStyles } from '../../../styles/global-tailwind';

export interface ButtonProps {
  children: string;
  variant: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info';
  size: 'xs' | 'sm' | 'md' | 'lg';
  rounded: 'sm' | 'md' | 'lg' | 'circle' | 'none';
  disabled: boolean;
  lIcon?: string;
  rIcon?: string;
}

@customElement('vd-button')
export class VDButton extends LitElement implements ButtonProps {
  static styles = [globalStyles];

  @property({ type: String }) variant: ButtonProps['variant'] = 'primary';
  @property({ type: String }) size: ButtonProps['size'] = 'md';
  @property({ type: String }) rounded: ButtonProps['rounded'] = 'md';
  @property({ type: Boolean }) disabled: boolean = false;
  @property({ type: String }) lIcon?: string;
  @property({ type: String }) rIcon?: string;

  protected updated(_changedProperties: PropertyValues) {
    super.updated(_changedProperties);
  }

  render() {
    return html`
      <button 
        class="btn ${this.variant} ${this.size} ${this.rounded}"
        ?disabled="${this.disabled}"
        part="button"
      >
        ${this.lIcon ? html`<span class="icon" slot="l-icon">${this.lIcon}</span>` : ''}
        <slot></slot>
        ${this.rIcon ? html`<span class="icon" slot="r-icon">${this.rIcon}</span>` : ''}
      </button>
    `;
  }
}
