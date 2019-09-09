import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

interface IBlockProps {
  children?: any;
}

export const Block = (props: IBlockProps) => <i className={classNames(styles.block)} />;

export default Block;
