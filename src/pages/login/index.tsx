import * as React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Box from '../../components/atoms/box';
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
  email: string;
  password: string;
}

export default class LoginPage extends React.Component<ILoginProps, IState> {
  constructor(props: ILoginProps) {
    super(props);
  }

  public render() {
    return (
      <Box direction="column" styles={{ justifyContent: 'center', alignItems: 'center' }}>
        <Mutation mutation={LOGIN_MUTATION} variables={this.state}>
          {(login: any) => <Login onClick={login} />}
        </Mutation>
      </Box>
    );
  }
  private doLogin = (email: string, password: string) => {
    this.setState({ email, password });
    // call graphql here
  };
}
