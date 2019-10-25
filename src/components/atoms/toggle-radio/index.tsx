import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const ToggleRadio: React.FC<IProps> = ({ className, ...props }) => {
  return (
    <label className={cn(styles.toggleRadio, className)}>
      <input type="checkbox" {...props} />
      <span className={cn(styles.slider, styles.round)} />
    </label>
  );
};

export default ToggleRadio;
