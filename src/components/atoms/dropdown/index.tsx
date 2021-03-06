import * as React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

export interface ISelectItem {
  label: string;
  value: any;
  default?: boolean;
}

export interface IDropDownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: ISelectItem[];
  label?: string;
}

const Dropdown: React.FC<IDropDownProps> = ({ options, label, className, ...props }) => {
  const [selectedItem, setSelectedItem] = React.useState<ISelectItem>();
  const [isDropdownVisible, toggleDropdown] = React.useState<boolean>(false);

  const selectItem = (item: ISelectItem) => {
    setSelectedItem(item);
    toggleDropdown(!isDropdownVisible);
  };

  const defaultOption = options.find(o => o.default);

  React.useEffect(() => {
    const def = options.find(o => o.default);
    if (def) {
      setSelectedItem(def);
    }
  }, []);

  return (
    <div
      className={cn(styles.container)}
      onMouseLeave={() => {
        if (isDropdownVisible) {
          toggleDropdown(!isDropdownVisible);
        }
      }}
    >
      <select
        value={(selectedItem && selectedItem.value) || undefined}
        {...props}
        className={styles.selectEl}
      >
        {options.map((option, index) => (
          <option key={`${index}_${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div
        className={cn(styles.container, styles.selected, className)}
        onClick={() => toggleDropdown(!isDropdownVisible)}
      >
        {label && <span className={styles.label}>{label}</span>}
        <span className={styles.selectedLabel}>
          {(selectedItem && selectedItem.label) || (defaultOption && defaultOption.label) || ''}
        </span>
      </div>
      <div className={cn(styles.container, styles.dropdown, { [styles.show]: isDropdownVisible })}>
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
