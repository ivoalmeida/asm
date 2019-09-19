import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export const Input: React.SFC<IInputProps> = ({ errorMessage, className, ...props }) => {
  const isError: boolean = errorMessage !== undefined && errorMessage.length > 0;

  return (
    <span className={classNames({ [styles.errorWarning]: isError })}>
      <input
        className={classNames(
          styles.inputText,
          {
            [styles.error]: isError,
          },
          className,
        )}
        {...props}
      />
    </span>
  );
};

export default Input;
