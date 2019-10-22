import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';

interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string;
  children?: any;
  buttons?: any;
}

const Form: React.FC<IProps> = ({ title, children, buttons, ...props }) => {
  return (
    <form className={styles.form} {...props}>
      <h4 className={styles.title}>{title}</h4>
      <hr className={styles.title} />
      {children}
      <div className={cn(styles.form, styles.buttons)}>{buttons}</div>
    </form>
  );
};

export default Form;
