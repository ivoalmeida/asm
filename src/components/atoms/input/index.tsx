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
  const isError: boolean = props.errorMessage !== undefined && props.errorMessage.length > 0;

  return (
    <span className={classNames({ [styles.errorWarning]: isError })}>
      <input
        type="text"
        className={classNames(styles.inputText, {
          [styles.error]: isError,
        })}
        placeholder={props.placeholder}
      />
    </span>
  );
};

export default InputText;
