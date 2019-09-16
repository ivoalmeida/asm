import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

export interface IBadgeProps {
  variant?: string;
  children?: any;
}

const Badge = (props: IBadgeProps) => (
  <span
    className={classNames(
      styles.badge,
      { [styles.primary]: props.variant === 'primary' },
      { [styles.secondary]: props.variant === 'secondary' },
      { [styles.success]: props.variant === 'success' },
      { [styles.danger]: props.variant === 'danger' },
      { [styles.warning]: props.variant === 'warning' },
    )}
  >
    {props.children}
  </span>
);

export default Badge;
