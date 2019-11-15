import * as React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

export interface IRadioItem {
  label: string;
  value: number;
}

export interface IToggleButtonProps {
  items: IRadioItem[];
  onClick?: () => boolean;
}

const ToggleButton: React.FC<IToggleButtonProps> = ({ items, onClick }) => {
  return (
    <div className={cn(styles.toggleButton)} onClick={onClick}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <input type="radio" id={item.label} name="onoff" value={item.value} checked />
          <label htmlFor={item.label}>{item.label}</label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ToggleButton;
