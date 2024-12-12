import { css, unsafeCSS } from 'lit';
import styles from './tailwind.css?inline';

// Process the CSS file with PostCSS/Tailwind at build time
export const globalStyles = css`
  ${unsafeCSS(styles)}
`;



