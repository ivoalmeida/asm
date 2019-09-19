import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from '../../auth/authcontext';
import ProtectedRoute from '../../auth/protectedRoute';
import MockServer from '../../containers/mockServer';
import LoginPage from '../login';
import UsersPage from '../users';

const App = () => {
  return (
    <MockServer>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/users" component={UsersPage} />
        </Switch>
      </Router>
    </MockServer>
  );
};

export default App;
