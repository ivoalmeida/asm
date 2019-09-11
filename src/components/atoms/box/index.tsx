import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

interface IBoxProps {
  direction?: string;
  w?: number;
  h?: number;
  styles?: React.CSSProperties;
  children?: any;
}

export const Box = (props: IBoxProps) => (
  <div
    className={classNames(styles.box, { [styles.column]: props.direction === 'column' })}
    style={Object.assign({}, { width: `${props.w}px`, height: `${props.h}px` }, props.styles)}
  >
    {props.children}
  </div>
);

export default Box;
