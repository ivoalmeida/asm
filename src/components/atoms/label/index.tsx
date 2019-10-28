import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<ILabelProps> = props => (
  <label className={classNames(styles.label, props.className)} htmlFor={props.htmlFor}>
    {props.children}
  </label>
);

export default Label;
