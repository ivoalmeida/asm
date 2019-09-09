import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

interface IGridProps {
  //   columns: number;
  //   areas: string;
  //   rows: number;
  children?: any;
}

export const Grid = (props: IGridProps) => {
  return <div className={styles.grid}>{props.children}</div>;
};

export default Grid;
