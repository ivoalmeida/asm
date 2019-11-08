import * as React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
  href?: string;
}

const getButtonStyles = (variant: string, size: string, className?: string) => {
  return classNames(
    styles.button,
    { [styles.primary]: variant === 'primary' },
    { [styles.secondary]: variant === 'secondary' },
    { [styles.danger]: variant === 'danger' },
    { [styles.success]: variant === 'success' },
    { [styles.navItem]: variant === 'nav-item' },
    { [styles.small]: size === 'small' },
    { [styles.medium]: size === 'medium' },
    { [styles.large]: size === 'large' },
    { [styles.xlarge]: size === 'xlarge' },
    className,
  );
};

export const Button: React.FC<IButtonProps> = ({
  variant = 'default',
  size,
  className,
  children,
  ...props
}) => {
  return (
    <button {...props} className={getButtonStyles(variant, size, className)}>
      {children}
    </button>
  );
};

export const LinkButton: React.FC<IButtonProps & React.LinkHTMLAttributes<HTMLAnchorElement>> = ({
  variant,
  size,
  className,
  children,
  ...props
}) => (
  <a {...props} className={getButtonStyles(variant, size, className)}>
    {children}
  </a>
);

export default Button;
