import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { SmartButtonProps, SmartButtonSize, SmartButtonVariant } from './types';
import { DEFAULT_SMART_BUTTON_PROPS } from './constants';
import { buttonStyles } from './styles';
import { globalStyles } from '../../styles/global-tailwind';

@customElement('ui-smart-button')
export class SmartButton extends LitElement implements SmartButtonProps {
  static styles = [globalStyles, buttonStyles];

  @property({ type: String }) variant: SmartButtonVariant = DEFAULT_SMART_BUTTON_PROPS.variant;
  @property({ type: String }) size: SmartButtonSize = DEFAULT_SMART_BUTTON_PROPS.size;
  @property({ type: Boolean }) disabled = DEFAULT_SMART_BUTTON_PROPS.disabled;

  render() {
    const classes = {
      'ui-smart-button': true,
      [`ui-smart-button--${this.variant}`]: true,
      [`ui-smart-button--${this.size}`]: true,
      'ui-smart-button--disabled': this.disabled,
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