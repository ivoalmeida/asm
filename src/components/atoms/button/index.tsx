import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

export interface IButtonProps {
  variant: string;
  size?: string;
  children?: any;
  className?: string;
  styles?: React.CSSProperties;
  href?: string;
  onClick?: (ev?: React.SyntheticEvent | Event) => void;
}

const getButtonStyles = (props: IButtonProps) => {
  return classNames(
    styles.button,
    { [styles.primary]: props.variant === 'primary' },
    { [styles.secondary]: props.variant === 'secondary' },
    { [styles.danger]: props.variant === 'danger' },
    { [styles.success]: props.variant === 'success' },
    { [styles.navItem]: props.variant === 'nav-item' },
    { [styles.small]: props.size === 'small' },
    { [styles.medium]: props.size === 'medium' },
    { [styles.large]: props.size === 'large' },
    { [styles.xlarge]: props.size === 'xlarge' },
    props.className,
  );
};

export const Button = (props: IButtonProps) => {
  return (
    <button style={props.styles} className={getButtonStyles(props)}>
      {props.children}
    </button>
  );
};

export const LinkButton = (props: IButtonProps) => (
  <a href={props.href} onClick={props.onClick} style={props.styles} className={styles.navItem}>
    {props.children}
  </a>
);

export default Button;
