import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

interface IBlockProps {
  children?: any;
}

export default (props: IBlockProps) => <span className={styles.block}>{props.children}</span>;
