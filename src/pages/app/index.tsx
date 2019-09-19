import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from '../../auth/authcontext';
import ProtectedRoute from '../../auth/protectedRoute';
import MockServer from '../../containers/mockServer';
import LoginPage from '../login';

const App = () => {
  return (
    <AuthProvider>
      <MockServer>
        <Router>
          <Switch>
            <Route path="/" component={LoginPage} />
          </Switch>
        </Router>
      </MockServer>
    </AuthProvider>
  );
};

export default App;
