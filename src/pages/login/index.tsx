import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Box from '../../components/atoms/box';
import Login from '../../components/organisms/login';
import { Redirect } from 'react-router';

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      password
    }
  }
`;

const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState();
  const [password, setPwd] = React.useState();
  const [login, { error, data }] = useMutation(LOGIN_MUTATION, { variables: { email, password } });

  if (data) {
    return <Redirect to="/users" />;
  }
  if (error) {
    return <div>{`An error has occured: ${error.message}`}</div>;
  }
  return (
    <Box justifyContent="center">
      <Login
        onEmailChange={setEmail}
        onPwdChange={setPwd}
        onSubmit={() => email && password && login()}
      />
    </Box>
  );
};

export default LoginPage;
