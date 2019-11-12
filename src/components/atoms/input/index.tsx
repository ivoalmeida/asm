import * as React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  invalid?: boolean;
}

export interface ITextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
  invalid?: boolean;
}

export const Input: React.SFC<IInputProps> = ({ errorMessage, invalid, className, ...props }) => {
  const displayErrorMessage = errorMessage && errorMessage.length > 0;
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

export const Textarea: React.FC<ITextareaProps> = ({
  errorMessage,
  invalid,
  className,
  ...props
}) => {
  const displayErrorMessage = errorMessage && errorMessage.length > 0;
  const isError: boolean = invalid || displayErrorMessage;

  return (
    <span className={cn({ [styles.errorWarning]: isError })}>
      <textarea
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
