import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

interface IBoxProps {
  children?: any;
}

export const Box = (props: IBoxProps) => <div className={styles.box}>{box.children}</div>;

export default Box;
