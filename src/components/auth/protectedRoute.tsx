import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthConsumer } from './authContext';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuth }) => (
      <Route render={props => (isAuth ? <Component {...props} /> : <Redirect to="/" />)} />
    )}
  </AuthConsumer>
);

export default ProtectedRoute;
