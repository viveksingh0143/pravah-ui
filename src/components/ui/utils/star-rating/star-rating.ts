import { html, css, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('v-star-rating')
export class StarRating extends LitElement {
  @property({ type: Number }) rating = 0;
  @property({ type: Number }) maxRating = 5;
  @property({ type: String, attribute: "star-style" }) starStyle = 'color: #efb100';
  @property({ type: String }) size = 'w-6';

  static styles = css`
    :host {
      display: inline-block;
    }
    svg {
      width: var(--star-size, 1.5rem); /* Example to customize size */
    }
  `;

  render() {
    const fullStars = Math.floor(this.rating);
    const fractionalPart = this.rating % 1;
    let partial: 'full' | 'half' | 'quarter' | 'three-quarter' | 'empty' | undefined;

    if (fractionalPart >= 0.75) {
      partial = 'three-quarter';
    } else if (fractionalPart >= 0.5) {
      partial = 'half';
    } else if (fractionalPart >= 0.25) {
      partial = 'quarter';
    } else {
      partial = 'empty';
    }

    const emptyStars = this.maxRating - fullStars - (partial ? 1 : 0);

    return html`
      <div class="flex items-center">
        ${this.renderStars(fullStars, partial, emptyStars)}
      </div>
    `;
  }

  renderStars(full: number, partial: 'full' | 'half' | 'quarter' | 'three-quarter' | 'empty' | undefined, empty: number) {
    return html`
      ${Array.from({ length: full }).map(() => this.renderStar('full'))}
      ${partial ? this.renderStar(partial) : ''}
      ${Array.from({ length: empty }).map(() => this.renderStar('empty'))}
    `;
  }

  renderStar(type: 'full' | 'half' | 'quarter' | 'three-quarter' | 'empty') {
    let starContent;
    let style = this.starStyle;

    switch (type) {
      case 'full':
        starContent = svg`
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        `;
        break;
      case 'half':
        starContent = svg`
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          <path fill="none" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        `;
        break;
      case 'three-quarter':
        starContent = svg`
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          <path fill="none" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        `;
        break;
      case 'quarter':
        starContent = svg`
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        `;
        break;
      case 'empty':
        starContent = svg`
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        `;
        break;
    }

    return svg`
      <svg style="${style}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        ${starContent}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'v-star-rating': StarRating;
  }
}


