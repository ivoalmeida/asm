import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';

interface IProps {
  title: string;
  children?: any;
  buttons?: any;
}

const Form: React.FC<IProps> = ({ title, children, buttons }) => {
  return (
    <div className={styles.form}>
      <h4 className={styles.title}>{title}</h4>
      <hr className={styles.title} />
      {children}
      <div className={cn(styles.form, styles.buttons)}>{buttons}</div>
    </div>
  );
};

export default Form;
