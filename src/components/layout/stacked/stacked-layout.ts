import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import  "../../ui/navs";
import "../../ui/utils/placeholder/";
import { globalStyles } from "../../../styles/global-tailwind";

@customElement('v-stacked-layout')
export class StackedLayout extends LitElement {
  static styles = [globalStyles];

  render() {
    return html`
    <div class="min-h-full">
      <slot name="navbar"></slot>
      <header class="bg-white shadow-xs">
        <slot name="header"></slot>
      </header>
      <main>
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <slot></slot>
        </div>
      </main>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "v-stacked-layout": StackedLayout;
  }
}
