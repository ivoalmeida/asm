import * as React from 'react';
import * as styles from './styles.scss';
import cn from 'classnames';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  invalid?: boolean;
}

export const Input: React.SFC<IInputProps> = ({ errorMessage, invalid, className, ...props }) => {
  const displayErrorMessage = errorMessage !== undefined && errorMessage.length > 0;
  const isError: boolean = invalid || displayErrorMessage;

  return (
    <span className={cn({ [styles.errorWarning]: isError })}>
      <input
        className={cn(
          styles.inputText,
          {
            [styles.error]: isError,
          },
          className,
        )}
        {...props}
      />
      {displayErrorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
    </span>
  );
};

export default Input;
