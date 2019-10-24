import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';
import Box from '../../atoms/box';
import Field from '../field';

export interface ITableContentItem {
  label: string;
  name: string;
  isChecked: boolean;
}

interface IProps {
  items: ITableContentItem[];
  handleChange: (ev) => void;
}

const TableContent: React.FC<IProps> = ({ items, handleChange }) => {
  return (
    <Box direction="column" className={cn(styles.tableContent)}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <Field
            type="checkbox"
            name={item.name}
            label={item.label}
            className={styles.chk}
            onChange={handleChange}
          />
        </div>
      ))}
    </Box>
  );
};

export default TableContent;
