import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ButtonProps, ButtonSize, ButtonVariant } from './types';
import { DEFAULT_BUTTON_PROPS } from './constants';
import { buttonStyles } from './styles';
import { globalStyles } from '../../styles/global-tailwind';

@customElement('ui-button')
export class Button extends LitElement implements ButtonProps {
  static styles = [globalStyles, buttonStyles];

  @property({ type: String }) variant: ButtonVariant = DEFAULT_BUTTON_PROPS.variant;
  @property({ type: String }) size: ButtonSize = DEFAULT_BUTTON_PROPS.size;
  @property({ type: Boolean }) disabled = DEFAULT_BUTTON_PROPS.disabled;

  render() {
    const classes = {
      'ui-button': true,
      [`ui-button--${this.variant}`]: true,
      [`ui-button--${this.size}`]: true,
      'ui-button--disabled': this.disabled,
    };

    return html`
      <button 
        class=${classMap(classes)}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(e: Event) {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('ui-click', {
        bubbles: true,
        composed: true,
        detail: { originalEvent: e }
      }));
    }
  }
}