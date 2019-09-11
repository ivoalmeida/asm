import * as React from 'react';
import Box from '../../atoms/box';
import Button from '../../atoms/button';
import InputText from '../../atoms/input';
import Label from '../../atoms/label';
import * as styles from './styles.scss';

interface IProps {
  children?: any;
  onClick?: (email: string, pwd: string) => void;
}

const Login: React.FC<IProps> = props => {
  return (
    <div className={styles.login}>
      <Box direction="column" w={500} h={400} styles={{ justifyContent: `flex-start` }}>
        <h1>Login</h1>
        <Label>E-mail Address</Label>
        <InputText placeholder="email" />
        <Label>Password</Label>
        <InputText placeholder="password" type="password" />
        <Button variant="primary" size="large">
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Login;
