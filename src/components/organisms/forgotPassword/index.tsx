import * as React from 'react';

import Box from '../../atoms/box';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
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

const ForgotPassword: React.FC<IProps> = props => {
  return (
    <div className={styles.forgot}>
      <Box justifyContent="center">
        <Logo />
      </Box>
      <h1 style={{ padding: `40px 0` }}>Forgot Password</h1>
      <Label>E-mail Address</Label>
      <Input placeholder="email" style={inputStyles} />
      <Button variant="primary" size="large">
        Send Reset Link
      </Button>
    </div>
  );
};

export default ForgotPassword;
