import { css, unsafeCSS } from 'lit';
import styles from './my-element.css?inline';

// Process the CSS file with PostCSS/Tailwind at build time
export const myElementStyles = css`
  :host {
    max-width: 1280px;
  }
  
  ${unsafeCSS(styles)}
`;