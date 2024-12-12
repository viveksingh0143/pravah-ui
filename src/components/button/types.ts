export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
}