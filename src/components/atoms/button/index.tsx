import * as React from 'react';
import * as styles from './styles.css';

interface IButtonProps {
  variant: string;
  children?: any;
}

const Button = (props: IButtonProps) => {
  return <button className={styles.button}>{props.children}</button>;
};

export default Button;
