import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';

export interface IRadioItem {
  label: string;
  value: number;
}

interface IProps {
  items: IRadioItem[];
  onClick?: () => boolean;
}

const ToggleButton: React.FC<IProps> = ({ items, onClick }) => {
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
