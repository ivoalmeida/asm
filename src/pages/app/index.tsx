import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from '../../auth/authcontext';
import ProtectedRoute from '../../auth/protectedRoute';
import MockServer from '../../containers/mock-server';
import LoginPage from '../login';
import UsersPage from '../users';
import { SignUpPage } from '../signup';

const App = () => {
  return (
    <MockServer>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/signup" component={SignUpPage} />
        </Switch>
      </Router>
    </MockServer>
  );
};

export default App;
