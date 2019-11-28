import * as React from 'react';

import Box from '../../atoms/box';
import Button from '../../atoms/button';
import Field from '../../molecules/field';
import * as styles from './styles.scss';

interface IProps {
  email: string;
  errorMessage?: string;
  onClick: () => void;
  onChange: (e) => void;
}

const ForgotPassword: React.FC<IProps> = ({ email, errorMessage, onClick, onChange }) => {
  return (
    <div className={styles.forgot}>
      <Box justifyContent="center" />
      <h1 style={{ padding: `40px 0` }}>Forgot Password</h1>
      <Field
        name="email"
        label="E-mail Address"
        value={email}
        placeholder="name@email.com"
        onChange={onChange}
        errorMessage={errorMessage}
      />
      <Button variant="primary" size="large" onClick={onClick}>
        Send Reset Link
      </Button>
    </div>
  );
};

export default ForgotPassword;
