import * as React from 'react';
import { Redirect, Link } from 'react-router-dom';

import * as styles from './styles.scss';
import Button from '../../atoms/button';
import Field from '../../molecules/field';

interface IProps {
  onEmailChange?: (value: string) => void;
  onPwdChange?: (value: string) => void;
  onSubmit: () => void;
}

const Login: React.FC<IProps> = ({ onEmailChange, onPwdChange, onSubmit }) => {
  return (
    <div className={styles.login}>
      <span className={styles.logo} />
      <h1 style={{ padding: `40px 0` }}>Login</h1>
      <Field
        name="email"
        label="E-mail Address"
        placeholder="email"
        onChange={e => onEmailChange(e.target.value)}
      />

      <div className={styles.pwdLink}>
        <Field
          name="pwd"
          label="Password"
          type="password"
          onChange={e => onPwdChange(e.target.value)}
        />
        <Link className={styles.forgot} to="/forgot">
          Forgot?
        </Link>
      </div>
      <Button variant="primary" size="large" onClick={onSubmit}>
        Login
      </Button>
    </div>
  );
};

export default Login;
