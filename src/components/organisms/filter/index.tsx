import * as React from 'react';

import * as styles from './styles.scss';
import Box from '../../atoms/box';
import Button from '../../atoms/button';
import IconButton from '../../molecules/icon-button';
import Dropdown, { ISelectItem } from '../../atoms/dropdown';

export interface IFilter {
  label: string;
  options: ISelectItem[];
}

interface IProps {
  filters: IFilter[];
}

const Filter: React.FC<IProps> = ({ filters }) => {
  return (
    <Box direction="row">
      <Box direction="row" justifyContent="flex-start" flex="2 1">
        {filters.map((filter, index) => (
          <Dropdown
            key={`${index}_${filter.label}`}
            label={filter.label}
            options={filter.options}
            className={styles.dropdown}
          />
        ))}
      </Box>
      <Box direction="row" justifyContent="flex-end" className={styles.buttons}>
        <IconButton icon="times" variant="default" size="small" className={styles.cancelButton}>
          Cancel
        </IconButton>
        <Button variant="secondary" size="small">
          Filter Now
        </Button>
      </Box>
    </Box>
  );
};

export default Filter;
