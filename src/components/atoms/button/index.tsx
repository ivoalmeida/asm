import * as React from 'react';
/* tslint:disable */
import styles from './styles.css';

interface IButtonProps {
  variant: string;
  children?: any;
}

const Button = (props: IButtonProps) => {
  return <button className={styles.button}>{props.children}</button>;
};

export default Button;
