import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';
import Icon from '../../atoms/icon';
import Button from '../../atoms/button';

interface IIconButton {
  variant: string;
  icon: string;
  size: string;
  children?: any;
}

export const IconButton = (props: IIconButton) => {
  return (
    <Button variant={props.variant} size={props.size}>
      <Icon variant={props.icon} styles={{ marginRight: `10px` }} />
      {props.children}
    </Button>
  );
};

export default IconButton;
