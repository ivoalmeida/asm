import * as React from 'react';
import Box from '../../atoms/box';
import Button, { LinkButton } from '../../atoms/button';
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

const ConfirmEmail: React.FC<IProps> = props => {
  return (
    <div className={styles.confirm}>
      <Box styles={{ justifyContent: 'center' }}>
        <Logo />
      </Box>
      <h1 style={{ padding: `40px 0` }}>Confirm your email</h1>
      <Label>Security Code</Label>
      <Input placeholder="security code" style={inputStyles} />
      <Button variant="primary" size="large">
        Login
      </Button>
      <LinkButton className={styles.resend} variant="default" size="large">
        Resend Verification Code
      </LinkButton>
    </div>
  );
};

export default ConfirmEmail;
