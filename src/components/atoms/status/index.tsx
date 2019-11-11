import * as React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

interface IProps {
  active: boolean;
}

const Status: React.FC<IProps> = ({ active }) => {
  return <div className={cn(styles.status, { [styles.active]: active })} />;
};

export default Status;
