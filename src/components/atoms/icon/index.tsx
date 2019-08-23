import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

interface IIconProps {
  variant: string;
}

export const Icon = (props: IIconProps) => (
  <i className={classNames(styles.icon, [styles[props.variant]])} />
);

export default Icon;
