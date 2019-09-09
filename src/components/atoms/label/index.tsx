import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

interface ILabelProps {
  children?: any;
  htmlFor?: string;
}

export const Label = (props: ILabelProps) => (
  <label className={classNames(styles.label)} htmlFor={props.htmlFor}>
    {props.children}
  </label>
);

export default Label;
