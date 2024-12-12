import { SmartButtonSize, SmartButtonVariant } from './types';

export const SMART_BUTTON_VARIANTS: SmartButtonVariant[] = ['primary', 'secondary', 'outline'];
export const SMART_BUTTON_SIZES: SmartButtonSize[] = ['small', 'medium', 'large'];

export const DEFAULT_SMART_BUTTON_PROPS = {
  variant: 'primary' as SmartButtonVariant,
  size: 'medium' as SmartButtonSize,
  disabled: false,
};