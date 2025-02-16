export type Color = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'info' | 'error';
export type Size = 'xs' | 'sm' | 'md' | 'lg';

export interface BaseInterface {
  color: Color;
  size: Size;
}
