import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Box from '../../components/atoms/box';
import Button from '../../components/atoms/button';
import Input from '../../components/atoms/input';
import Label from '../../components/atoms/label';
import { Mutation } from 'react-apollo';

const SIGNUP_MUTATION = gql`
  mutation signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      email
      password
      name
    }
  }
`;
export interface IProps {
  children?: any;
  history?: any;
}

interface IState {
  email: string;
  password: string;
  name: string;
}

export class SignUpPage extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
    };
  }

  public render() {
    const { email, name, password } = this.state;

    return (
      <Box direction="column">
        <h1>Sign Up</h1>
        <Label>Name</Label>
        <Input onChange={e => this.setState({ name: e.target.value })} value={name} />
        <Label>Email</Label>
        <Input onChange={e => this.setState({ email: e.target.value })} value={email} />
        <Label>Password</Label>
        <Input
          type="password"
          onChange={e => this.setState({ password: e.target.value })}
          value={password}
        />
        <Mutation
          mutation={SIGNUP_MUTATION}
          variables={{ name, email, password }}
          onCompleted={data => this.confirm(data)}
        >
          {signup => (
            <Button variant="primary" size="large" onClick={signup}>
              Sign up
            </Button>
          )}
        </Mutation>
      </Box>
    );
  }

  private confirm = data => {
    const { token } = data.signup;
    this.saveUserData(token);
    this.props.history.push(`/users`);
  };

  private saveUserData = token => {
    document.cookie = `AUTH_TOKEN=${token}`;
  };
}
