import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

interface IInputProps {
  errorMessage?: string;
  disabled?: boolean;
  placeholder?: string;
  styles?: React.CSSProperties;
  className?: string;
}

export const InputText = (props: IInputProps) => {
  return (
    <input
      type="text"
      className={classNames(styles.inputText, {
        [styles.error]: props.errorMessage && props.errorMessage.length > 0,
      })}
      placeholder={props.placeholder}
    />
  );
};

export default InputText;
