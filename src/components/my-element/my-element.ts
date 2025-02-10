import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import litLogo from '../../assets/lit.svg'
import viteLogo from '/vite.svg'
import { globalStyles } from '../../styles/global-tailwind';
import { myElementStyles } from './styles/index';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = [globalStyles, myElementStyles];
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <div class="flex justify-center p-2 text-center">
        <a href="https://vite.dev" target="_blank">
          <img src=${viteLogo} class="logo h-24 p-6 will-change-filter transition duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit h-24 p-6 will-change-filter transition duration-300 hover:drop-shadow-[0_0_2em_#325cffaa]" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card p-8">
        <button @click=${this._onClick} part="button" class="rounded-lg border border-transparent px-3 py-2 text-base font-medium font-inherit bg-gray-800 text-white cursor-pointer transition-colors duration-300 hover:border-[#646cff] focus:outline-4 focus:outline-webkit-focus-ring-color">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs text-gray-500">${this.docsHint}</p>
    `
  }

  private _onClick() {
    this.count++
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
