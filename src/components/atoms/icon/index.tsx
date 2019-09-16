import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

export interface IIconProps {
  variant: string;
  className?: string;
  styles?: React.CSSProperties;
}

const getIconStyle = (type: string) => {
  return classNames(
    styles.icon,
    { [styles.search]: type === 'search' },
    { [styles.actions]: type === 'actions' },
    { [styles.changelog]: type === 'changelog' },
    { [styles.cog]: type === 'cog' },
    { [styles.disabled]: type === 'disabled' },
    { [styles.drag]: type === 'drag' },
    { [styles.duplicate]: type === 'duplicate' },
    { [styles.edit]: type === 'edit' },
    { [styles.eye]: type === 'eye' },
    { [styles.filter]: type === 'filter' },
    { [styles.filter2]: type === 'filter2' },
    { [styles.leftArrow]: type === 'leftArrow' },
    { [styles.plus]: type === 'plus' },
    { [styles.rightArrow]: type === 'rightArrow' },
    { [styles.tag]: type === 'tag' },
    { [styles.times]: type === 'times' },
    { [styles.trash]: type === 'trash' },
  );
};

export const Icon: React.SFC<IIconProps> = ({ variant, className, ...props }) => {
  return <i className={classNames(getIconStyle(variant), className)} style={props.styles} />;
};

export default Icon;
