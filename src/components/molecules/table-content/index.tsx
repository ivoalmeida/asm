import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';
import Box from '../../atoms/box';
import Checkbox from '../../atoms/checkbox';
import Label from '../../atoms/label';

export interface ITableContentItem {
  label: string;
  name: string;
  isChecked: boolean;
}

interface IProps {
  items: ITableContentItem[];
  handleChange: (ev) => void;
  onClose: (ev) => void;
}

const TableContent: React.FC<IProps> = ({ items, handleChange, onClose }) => {
  return (
    <Box direction="column" className={cn(styles.tableContent)} onMouseLeave={onClose}>
      {items.map((item, index) => (
        <Label htmlFor={item.name} key={index} className={styles.item}>
          <Checkbox
            checked={item.isChecked}
            name={item.name}
            id={item.name}
            value={item.name}
            className={styles.chk}
            onChange={handleChange}
          />
          <span className={styles.label}>{item.label}</span>
        </Label>
      ))}
    </Box>
  );
};

export default TableContent;
