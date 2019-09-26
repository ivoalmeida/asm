import * as React from 'react';

import * as styles from './styles.scss';

const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = props => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" {...props} />
      <span className={styles.checkmark} />
    </label>
  );
};

export default Checkbox;
