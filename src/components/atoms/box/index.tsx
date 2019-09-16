import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

export interface IBoxProps {
  direction?: string;
  w?: number;
  h?: number;
  styles?: React.CSSProperties;
  children?: any;
  className?: string;
  justifyContent?: string;
}

export const Box: React.SFC<IBoxProps> = ({ direction, w, h, justifyContent, ...props }) => (
  <div
    className={classNames(styles.box, { [styles.column]: direction === 'column' })}
    style={Object.assign({}, { width: `${w}px`, height: `${h}px` }, props.styles)}
  >
    {props.children}
  </div>
);

export default Box;
