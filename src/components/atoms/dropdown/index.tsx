import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';
import { placeholder } from '@babel/types';
import { select } from '@storybook/addon-knobs';

interface ISelectItem {
  label: string;
  value: any;
  default?: boolean;
}

interface IProps {
  options: ISelectItem[];
  placeholder?: string;
  label?: string;
  onSelect?: (item: ISelectItem) => void;
}

const Dropdown: React.FC<IProps> = ({
  options,
  onSelect,
  label,
  placeholder = 'Select an option',
}) => {
  const [selectedItem, setSelectedItem] = React.useState<ISelectItem>();
  const [isDropdownVisible, toggleDropdown] = React.useState<boolean>(false);

  const selectItem = (item: ISelectItem) => {
    setSelectedItem(item);
    if (onSelect) {
      onSelect(item);
    }
  };

  const defaultOption = options.find(o => o.default);

  return (
    <div className={styles.container}>
      <div
        className={cn(styles.container, styles.selected)}
        onClick={() => toggleDropdown(!isDropdownVisible)}
        onMouseLeave={() => toggleDropdown(!isDropdownVisible)}
      >
        <span className={styles.label}>{label}</span>
        <span>
          {(selectedItem && selectedItem.label) || (defaultOption && defaultOption.label) || ''}
        </span>
      </div>
      <div
        className={cn(styles.container, styles.dropdown, { [styles.show]: isDropdownVisible })}
        onMouseLeave={() => toggleDropdown(!isDropdownVisible)}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={cn(styles.item)}
            onClick={() => {
              selectItem(option);
            }}
          >
            <span>{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
