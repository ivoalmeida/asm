import * as React from 'react';
import classNames from 'classnames';

import * as styles from './styles.scss';
import Icon from '../../atoms/icon';
import Button from '../../atoms/button';

interface IIconButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  icon: string;
  size?: string;
  children?: any;
  onClick?: (ev) => void;
}

const IconButton: React.FC<IIconButton> = ({
  variant,
  size,
  icon,
  children,
  onClick,
  className,
  ...props
}) => {
  if (children) {
    return (
      <Button variant={variant} size={size} onClick={onClick} className={className} {...props}>
        <Icon variant={icon} styles={{ marginRight: `10px` }} />
        {children}
      </Button>
    );
  } else {
    return (
      <button className={styles.iconOnlyButton} onClick={onClick}>
        <Icon variant={icon} />
      </button>
    );
  }
};

export default IconButton;
