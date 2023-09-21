import { ReactNode, useState } from 'react';
import './Switch.scss';

interface SwitchProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  checked: boolean;
  onChange: (isChecked: boolean) => void;
  children?: ReactNode;
}

const Switch = ({ size = 'medium', color = '#007bff', checked, onChange, children }: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div className="switch-container" onClick={handleToggle}>
      <div className={`switch ${size} ${isChecked ? 'checked' : ''}`}>
        <div className="slider" style={{ backgroundColor: isChecked ? color : '' }}></div>
      </div>
      <span className="switch-label">{children}</span>
    </div>
  );
};

export default Switch;
