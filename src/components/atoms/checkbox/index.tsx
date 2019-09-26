import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';

interface IProps {
  isMultiSelection?: boolean;
}

const Checkbox: React.FC<IProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  isMultiSelection,
  ...props
}) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" {...props} />
      <span className={cn(styles.checkmark, { [styles.multiSelection]: isMultiSelection })} />
    </label>
  );
};

export default Checkbox;
