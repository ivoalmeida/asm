import * as React from 'react';
/* tslint:disable */
import * as styles from './styles.scss';
import classNames from 'classnames';

interface IButtonProps {
  variant: string;
  children?: any;
}

const getButtonType = (variant: string) => {
  return classNames(
    styles.button,
    { [styles.primary]: variant === 'primary' },
    { [styles.secondary]: variant === 'secondary' },
    { [styles.danger]: variant === 'danger' },
    { [styles.success]: variant === 'success' },
  );
};

const Button = (props: IButtonProps) => {
  const buttonClassName = getButtonType(props.variant);
  return <button className={buttonClassName}>{props.children}</button>;
};

Button.defaultProps = {
  variant: 'default',
};

export default Button;
