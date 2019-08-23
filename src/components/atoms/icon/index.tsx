import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

interface IIconProps {
  variant: string;
}

const iconStyles = Object.keys(styles);

export const Icon = (props: IIconProps) => (
  <i className={classNames(styles.icon, iconStyles.find(x => x === props.variant))} />
);

export default Icon;
