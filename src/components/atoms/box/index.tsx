import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

export interface IBoxProps {
  direction?: any | string;
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  justifyItems?: string;
  children?: any;
  className?: string;
  flex?: string;
  padding?: string;
  margin?: string;
}

export const Box: React.SFC<IBoxProps> = ({
  direction = 'row',
  width,
  height,
  justifyContent,
  justifyItems,
  alignItems,
  alignContent,
  children,
  className,
  flex,
  padding,
  margin,
}) => (
  <div
    className={classNames(styles.box, className)}
    style={{
      width,
      height,
      display: 'flex',
      flexDirection: direction,
      justifyContent,
      justifyItems,
      alignItems,
      alignContent,
      flex,
      padding,
      margin,
    }}
  >
    {children}
  </div>
);

export default Box;
