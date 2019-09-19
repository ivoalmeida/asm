import * as React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Box from '../../components/atoms/box';
import Button from '../../components/atoms/button';
import Input from '../../components/atoms/input';
import Label from '../../components/atoms/label';
import Logo from '../../components/atoms/logo';
import Login from '../../components/organisms/login';

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      password
    }
  }
`;

export interface ILoginProps {
  children?: any;
}

export interface IState {
  email?: string;
  password?: string;
}

export default class LoginPage extends React.Component<ILoginProps, IState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined,
    };
  }

  public render() {
    const inputStyles: React.CSSProperties = {
      width: `100%`,
      marginBottom: `10px`,
    };
    const { email, password } = this.state;
    return (
      <Box justifyContent="center">
        <Box direction="column" padding="10vh 5px" width="400px">
          <Box justifyContent="center">
            <Logo />
          </Box>
          <h1 style={{ padding: `40px 0` }}>Login</h1>
          <Label>E-mail Address</Label>
          <Input
            placeholder="email"
            style={inputStyles}
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Label>Password</Label>
          <Input
            placeholder="password"
            type="password"
            style={inputStyles}
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />

          <Mutation mutation={LOGIN_MUTATION} variables={this.state}>
            {(login: any) => (
              <Button variant="primary" size="large" onClick={login}>
                Login
              </Button>
            )}
          </Mutation>
        </Box>
      </Box>
    );
  }
}
