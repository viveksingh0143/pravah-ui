import { css, unsafeCSS } from 'lit';
import styles from './host-unset.css?inline';

export const hostUnsetStyles = css`
  ${unsafeCSS(styles)}
`;
