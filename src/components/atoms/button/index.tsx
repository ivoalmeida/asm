import * as React from 'react';
/* tslint:disable */
import * as styles from './styles.css';

interface IButtonProps {
  variant: string;
  children?: any;
}

const Button = (props: IButtonProps) => {
  return <button className={styles.buttonLarge}>{props.children}</button>;
};

export default Button;
