import * as React from 'react';

import Box from '../../components/atoms/box';
import Login from '../../components/organisms/login';

export interface ILoginProps {
  children?: any;
}

export default class LoginPage extends React.Component<ILoginProps> {
  public render() {
    return (
      <Box direction="column" styles={{ justifyContent: 'center', alignItems: 'center' }}>
        <Login />
      </Box>
    );
  }
}
