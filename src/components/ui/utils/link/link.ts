import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { LinkInterface } from "./link-types";
import { globalStyles } from "../../../../styles/global-tailwind";

@customElement('v-link')
export class Link extends LitElement implements LinkInterface {
  static styles = [globalStyles];

  @property({ type: String })
  href: string = "#";

  @property({ type: String })
  class: string = "";

  @property({ type: String })
  label?: string = "";

  @property({ type: Boolean })
  isDropdown: boolean = false;

  private isSlotTextOnly(): boolean {
    const slot = this.shadowRoot?.querySelector('slot');
    if (slot) {
      const nodes = slot.assignedNodes({ flatten: true });
      return nodes.every(node => node.nodeType === Node.TEXT_NODE);
    }
    return this.label != "";
  }

  private getLabel(): TemplateResult<1> {
    return html`<slot @slotchange="${() => this.requestUpdate()}">${this.label}</slot>`;
  }

  render() {
    if (this.isSlotTextOnly()) {
      return html`<a href="${this.href}" class="rounded-md px-3 py-2 text-sm font-medium ${this.class}" @click="${this.onclick}">${this.getLabel()}</a>`;
    } else {
      return this.getLabel();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "v-link": Link;
  }
}
