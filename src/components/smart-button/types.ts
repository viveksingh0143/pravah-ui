export type SmartButtonVariant = 'primary' | 'secondary' | 'outline';
export type SmartButtonSize = 'small' | 'medium' | 'large';

export interface SmartButtonProps {
  variant: SmartButtonVariant;
  size: SmartButtonSize;
  disabled: boolean;
}