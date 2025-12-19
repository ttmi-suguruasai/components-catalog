import { useState } from 'react';

import './toggle-button.css';

export interface ToggleButtonProps {
  /** トグルの初期状態 */
  defaultChecked?: boolean;
  /** トグルの状態（制御コンポーネント用） */
  checked?: boolean;
  /** 無効化 */
  disabled?: boolean;
  /** サイズ */
  size?: 'small' | 'medium' | 'large';
  /** ラベル */
  label?: string;
  /** 状態変更時のコールバック */
  onChange?: (checked: boolean) => void;
}

/** オン/オフ状態を切り替えるトグルボタンコンポーネント */
export const ToggleButton = ({
  defaultChecked = false,
  checked,
  disabled = false,
  size = 'medium',
  label,
  onChange,
}: ToggleButtonProps) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleClick = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    if (checked === undefined) {
      setInternalChecked(newChecked);
    }
    onChange?.(newChecked);
  };

  return (
    <div className={`toggle-button-wrapper toggle-button-wrapper--${size}`}>
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-label={label}
        disabled={disabled}
        className={[
          'toggle-button',
          `toggle-button--${size}`,
          isChecked ? 'toggle-button--checked' : '',
          disabled ? 'toggle-button--disabled' : '',
        ].join(' ')}
        onClick={handleClick}
      >
        <span className="toggle-button__slider" />
      </button>
      {label && <span className="toggle-button__label">{label}</span>}
    </div>
  );
};
