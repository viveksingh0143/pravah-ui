import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { globalStyles } from "../../../styles/global-tailwind";
import { hostUnsetStyles } from "../../../styles/host-unset";

@customElement("v-dropdown")
export class DropdownButton extends LitElement {
  static styles = [globalStyles, hostUnsetStyles];

  @property({ type: String }) label = "Dropdown";
  @property({ type: String, reflect: true }) class = "";
  @property({ type: String, reflect: true }) contentClass = "";

  @state() private isOpen = false;

  private toggleDropdown(event: Event) {
    event.stopPropagation(); // Prevents event from bubbling up to document
    this.isOpen = !this.isOpen;
  }

  private closeDropdown(event: Event) {
    if (!this.shadowRoot?.querySelector(".dropdown")?.contains(event.target as Node)) {
      this.isOpen = false;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this.closeDropdown.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this.closeDropdown.bind(this));
  }

  render() {
    return html`
      <div class="relative ml-3">
        <button 
          type="button" 
          class="relative flex max-w-xs items-center rounded-full text-sm text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden ${this.class}"
          @click="${this.toggleDropdown}" 
          id="user-menu-button" 
          aria-expanded="${this.isOpen}" 
          aria-haspopup="true"
        >
          <slot name="btn">
            <span class="sr-only">Open dropdown menu</span>
            <span>${this.label}</span>
          </slot>
        </button>
        <div 
          class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden transition duration-100 ease-out transform ${this.contentClass} ${this.isOpen ? 'ease-out duration-100 opacity-100 scale-100' : 'ease-in duration-75 opacity-0 scale-95'}"
          role="menu" 
          aria-orientation="vertical" 
          aria-labelledby="user-menu-button"
        >
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "v-dropdown": DropdownButton;
  }
}