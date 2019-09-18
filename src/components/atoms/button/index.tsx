import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

export interface IButtonProps {
  variant: string;
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

export const Button: React.SFC<IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant,
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

export const LinkButton: React.SFC<IButtonProps & React.LinkHTMLAttributes<HTMLAnchorElement>> = ({
  variant,
  size,
  className,
  children,
  ...props
}) => (
  <a {...props} className={classNames(styles.navItem, className)}>
    {children}
  </a>
);

export default Button;
