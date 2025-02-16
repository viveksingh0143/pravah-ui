import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { globalStyles } from "../../../../styles/global-tailwind";
import { hostUnsetStyles } from "../../../../styles/host-unset";

@customElement("v-empty-placeholder")
export class EmptyPlaceholder extends LitElement {
  static styles = [globalStyles, hostUnsetStyles];

  @property({ type: String, reflect: true }) class = "";

  render() {
    return html`
    <div class="relative h-96 overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75 ${this.class}">
      <svg class="absolute inset-0 size-full stroke-gray-900/10" fill="none">
        <defs>
          <pattern id="pattern-745cab5c-108c-41fd-a2bc-900075715d30" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect stroke="none" fill="url(#pattern-745cab5c-108c-41fd-a2bc-900075715d30)" width="100%" height="100%"></rect>
      </svg>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "v-empty-placeholder": EmptyPlaceholder;
  }
}
