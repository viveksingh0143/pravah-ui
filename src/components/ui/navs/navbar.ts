import { LitElement, html } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { NavBarInterface } from './nav-types';
import { globalStyles } from '../../../styles/global-tailwind';

@customElement('v-navbar')
export class Navbar extends LitElement implements NavBarInterface {
  static styles = [globalStyles];
  @property({ type: String, attribute: 'nav-class' }) navClass = "";
  @property({ type: String, attribute: 'nav-mobile-class' }) navMobileClass = "";
  @property({ type: String, attribute: 'nav-mobile-links-class' }) navMobileLinksClass = "";

  @queryAssignedElements({ slot: "right-navs" })
  private slottedRightNavs?: HTMLElement[];


  @state() private isOpen = false;
  
  private toggleCollapse(event: Event) {
    event.stopPropagation(); // Prevents event from bubbling up to document
    this.isOpen = !this.isOpen;
  }

  private closeCollapse(event: Event) {
    if (!this.shadowRoot?.querySelector(".collapse")?.contains(event.target as Node)) {
      this.isOpen = false;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this.closeCollapse.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this.closeCollapse.bind(this));
  }

  firstUpdated() {
    this.duplicateRightNavsSlotContent();
  }

  duplicateRightNavsSlotContent() {
    if (this.slottedRightNavs && this.slottedRightNavs.length > 0) {
      const duplicateContainer = this.shadowRoot?.querySelector("#mobile-right-navs");
      if (duplicateContainer) {
        duplicateContainer.innerHTML = ""; // Clear previous content
        this.slottedRightNavs.forEach((el) => {
          if(el.hasAttribute("has-mobile")) {
            const clone = el.cloneNode(true) as HTMLElement;
            duplicateContainer.appendChild(clone);
          }
        });
      }
    }
  }


  render() {
    return html`
      <slot hidden @slotchange=${this._slotChanged}></slot>
      <nav class="${this.navClass}">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <div class="shrink-0">
                <slot name="logo"><span class="text-white">Company Logo</span></slot>
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4"  id="desktop-navitems"></div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <slot name="right-navs"></slot>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <button @click="${this.toggleCollapse}" type="button" class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" aria-controls="mobile-menu" aria-expanded="false">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <!-- Menu open: "hidden", Menu closed: "block" -->
                <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <!-- Menu open: "block", Menu closed: "hidden" -->
                <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
    
        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="md:hidden ${this.navMobileClass} ${this.isOpen ? 'block' : 'hidden'}" id="mobile-menu">
          <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3" id="mobile-navitems"></div>
          <div id="mobile-right-navs"></div>
        </div>
      </nav>
    `;
  }

  _slotChanged() {
    const slot = this.shadowRoot!.querySelector('slot');
    const desktopContainer = this.shadowRoot!.querySelector('#desktop-navitems');
    const mobileContainer = this.shadowRoot!.querySelector('#mobile-navitems');

    if (slot && desktopContainer && mobileContainer) {
      desktopContainer.innerHTML = '';
      mobileContainer.innerHTML = '';
      const assignedElements = slot.assignedNodes({ flatten: true }).filter((n) => n.nodeType === Node.ELEMENT_NODE) as HTMLElement[];
      assignedElements.forEach((node) => {
        const childMobileNode = node.cloneNode(true) as HTMLElement;
        const childDesktopNode = node.cloneNode(true) as HTMLElement;
        if (this.navMobileLinksClass != "") {
          childMobileNode.classList.add(...this.navMobileLinksClass.split(" "));
        }
        if (childMobileNode.hasAttribute("has-mobile")) {
          mobileContainer.appendChild(childMobileNode);
        }
        if (!childDesktopNode.hasAttribute("hide-desktop")) {
          desktopContainer.appendChild(childDesktopNode);
        }
      });
    }
  }
}


declare global {
  interface HTMLElementTagNameMap {
    "v-navbar": Navbar;
  }
}
