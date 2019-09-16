import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from '../../components/auth/authcontext';
import ProtectedRoute from '../../components/auth/protectedRoute';
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
