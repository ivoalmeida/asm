import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';

interface IProps {
  size?: string;
}

const Spinner: React.FC<IProps> = ({ size }) => (
  <div
    className={cn(
      styles.spinner,
      { [styles.xsmall]: size === 'xsmall' },
      { [styles.small]: size === 'small' },
      { [styles.medium]: size === 'medium' },
      { [styles.large]: size === 'large' },
      { [styles.xlarge]: size === 'xlarge' },
    )}
  />
);

export default Spinner;
