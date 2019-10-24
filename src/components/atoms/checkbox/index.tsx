import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isMultiSelection?: boolean;
}

const Checkbox: React.FC<IProps> = ({ isMultiSelection, className, ...props }) => {
  return (
    <label className={cn(styles.checkbox, className)}>
      <input type="checkbox" {...props} />
      <span className={cn(styles.checkmark, { [styles.multiSelection]: isMultiSelection })} />
    </label>
  );
};

export default Checkbox;
