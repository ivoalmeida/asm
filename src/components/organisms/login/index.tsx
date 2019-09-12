import * as React from 'react';
import classNames from 'classnames';
import Box from '../../atoms/box';

import Button from '../../atoms/button';
import InputText from '../../atoms/input';
import Label from '../../atoms/label';
import Logo from '../../atoms/logo';
import * as styles from './styles.scss';

interface IProps {
  children?: any;
  onClick?: (email: string, pwd: string) => void;
}

const inputStyles: React.CSSProperties = {
  width: `100%`,
  marginBottom: `10px`,
};

const Login: React.FC<IProps> = props => {
  return (
    <div className={styles.login}>
      <Box styles={{ justifyContent: 'center' }}>
        <Logo />
      </Box>
      <h1 style={{ padding: `40px 0` }}>Login</h1>
      <Label>E-mail Address</Label>
      <InputText placeholder="email" styles={inputStyles} />
      <Label>Password</Label>
      <div className={styles.pwdLink}>
        <InputText placeholder="password" type="password" styles={inputStyles} />
        <a className={styles.forgot} href="#">
          Forgot?
        </a>
      </div>
      <Button variant="primary" size="large">
        Login
      </Button>
    </div>
  );
};

export default Login;
