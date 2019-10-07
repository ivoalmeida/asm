import * as React from 'react';
import { Redirect } from '@reach/router';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import ForgotPassword from '../../components/organisms/forgot-password';

const FORGOT_MUTATION = gql`
  mutation forgot($email: String!) {
    forgot(email: $email) {
      email
    }
  }
`;

interface IProps {
  email: string;
}

const ForgotPasswordPage: React.FC<IProps> = ({ email: emailProp }) => {
  const [email, setEmail] = React.useState(emailProp);
  const [forgot, { error, data }] = useMutation(FORGOT_MUTATION, { variables: { email } });

  if (data) {
    return <Redirect to="/login" />;
  } else {
    return (
      <ForgotPassword
        email={email}
        errorMessage={error ? error.message : null}
        onChange={setEmail}
        onClick={() => email && forgot()}
      />
    );
  }
};

export default ForgotPasswordPage;
