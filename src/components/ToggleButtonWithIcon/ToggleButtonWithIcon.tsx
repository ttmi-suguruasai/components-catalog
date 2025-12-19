import { useState } from 'react';
import type { ReactNode } from 'react';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import './ToggleButtonWithIcon.css';

/** lucide-reactのアイコン名 */
export type LucideIconName = keyof typeof LucideIcons;

export interface ToggleButtonWithIconProps {
  /** 形状（rounded: 丸形スライド, square: 四角形セグメント） */
  variant?: 'rounded' | 'square';
  /** 左側のアイコン（lucide-reactのアイコン名またはReactNode） */
  leftIcon: LucideIconName | ReactNode;
  /** 右側のアイコン（lucide-reactのアイコン名またはReactNode） */
  rightIcon: LucideIconName | ReactNode;
  /** 左側のラベル */
  leftLabel: string;
  /** 右側のラベル */
  rightLabel: string;
  /** 初期値 */
  defaultValue?: 'left' | 'right';
  /** 制御された値 */
  value?: 'left' | 'right';
  /** アクセントカラー */
  accentColor?: 'orange' | 'blue' | 'purple' | 'green' | 'red';
  /** 無効化 */
  disabled?: boolean;
  /** 値変更時のコールバック */
  onChange?: (value: 'left' | 'right') => void;
}

/** アイコンをレンダリング */
const renderIcon = (icon: LucideIconName | ReactNode): ReactNode => {
  if (typeof icon === 'string' && icon in LucideIcons) {
    const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon;
    if (IconComponent) {
      return <IconComponent size={28} />;
    }
    return null;
  }
  return icon;
};

/** アイコン付きトグルボタンコンポーネント */
export const ToggleButtonWithIcon = ({
  variant = 'rounded',
  leftIcon,
  rightIcon,
  leftLabel,
  rightLabel,
  defaultValue = 'left',
  value,
  accentColor = 'orange',
  disabled = false,
  onChange,
}: ToggleButtonWithIconProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = value !== undefined ? value : internalValue;

  const handleClick = (newValue: 'left' | 'right') => {
    if (disabled) return;
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const isLeftSelected = currentValue === 'left';

  return (
    <div
      className={`
        toggle-with-icon
        toggle-with-icon--${variant}
        toggle-with-icon--${accentColor}
        ${disabled ? 'toggle-with-icon--disabled' : ''}
      `}
    >
      <button
        type="button"
        disabled={disabled}
        onClick={() => handleClick('left')}
        className={`
          toggle-with-icon__option
          ${isLeftSelected ? 'toggle-with-icon__option--selected' : ''}
        `}
      >
        <span className="toggle-with-icon__icon">{renderIcon(leftIcon)}</span>
        <span className="toggle-with-icon__label">{leftLabel}</span>
      </button>

      <button
        type="button"
        disabled={disabled}
        onClick={() => handleClick('right')}
        className={`
          toggle-with-icon__option
          ${!isLeftSelected ? 'toggle-with-icon__option--selected' : ''}
        `}
      >
        <span className="toggle-with-icon__icon">{renderIcon(rightIcon)}</span>
        <span className="toggle-with-icon__label">{rightLabel}</span>
      </button>
    </div>
  );
};
