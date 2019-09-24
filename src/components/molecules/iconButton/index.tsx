import * as React from 'react';
import classNames from 'classnames';

import * as styles from './styles.scss';
import Icon from '../../atoms/icon';
import Button from '../../atoms/button';

interface IIconButton {
  variant?: string;
  icon: string;
  size?: string;
  children?: any;
}

const IconButton: React.FC<IIconButton> = ({ variant, size, icon, children }) => {
  if (children) {
    return (
      <Button variant={variant} size={size}>
        <Icon variant={icon} styles={{ marginRight: `10px` }} />
        {children}
      </Button>
    );
  } else {
    return <Icon variant={icon} className={styles.iconOnlyButton} />;
  }
};

export default IconButton;
