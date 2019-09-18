import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from '../../auth/authcontext';
import ProtectedRoute from '../../auth/protectedRoute';
import LoginPage from '../login';

const App = () => (
  <AuthProvider>
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  </AuthProvider>
);

export default App;
