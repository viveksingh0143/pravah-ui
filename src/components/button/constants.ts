import { ButtonSize, ButtonVariant } from './types';

export const BUTTON_VARIANTS: ButtonVariant[] = ['primary', 'secondary', 'outline'];
export const BUTTON_SIZES: ButtonSize[] = ['small', 'medium', 'large'];

export const DEFAULT_BUTTON_PROPS = {
  variant: 'primary' as ButtonVariant,
  size: 'medium' as ButtonSize,
  disabled: false,
};