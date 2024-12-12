import { css, unsafeCSS } from 'lit';
import styles from './button.css?inline';

// Process the CSS file with PostCSS/Tailwind at build time
export const buttonStyles = css`
  :host {
    display: inline-block;
  }
  
  ${unsafeCSS(styles)}
`;