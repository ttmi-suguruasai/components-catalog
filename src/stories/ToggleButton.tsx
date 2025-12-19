import { useState } from 'react';

import './toggle-button.css';

export interface ToggleButtonProps {
  /** Initial state of the toggle */
  defaultChecked?: boolean;
  /** Controlled checked state */
  checked?: boolean;
  /** Disable the toggle */
  disabled?: boolean;
  /** Size of the toggle */
  size?: 'small' | 'medium' | 'large';
  /** Label for the toggle */
  label?: string;
  /** Callback when toggle state changes */
  onChange?: (checked: boolean) => void;
}

/** Toggle button component for switching between on/off states */
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
