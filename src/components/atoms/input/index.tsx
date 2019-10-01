import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  invalid?: boolean;
}

export const Input: React.SFC<IInputProps> = ({ errorMessage, invalid, className, ...props }) => {
  const isError: boolean = invalid || (errorMessage !== undefined && errorMessage.length > 0);

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
