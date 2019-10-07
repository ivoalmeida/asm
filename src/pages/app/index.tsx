import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from '../../auth/authcontext';
import ProtectedRoute from '../../auth/protectedRoute';
import MockServer from '../../containers/mock-server';
import LoginPage from '../login';
import ForgotPasswordPage from '../forgot-password';
import UsersPage from '../users';
import { SignUpPage } from '../signup';
import AccountsPage from '../accounts';
import NetworksPage from '../networks';
import FinancePage from '../finance';

const App = () => {
  return (
    <MockServer>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/accounts" component={AccountsPage} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/networks" component={NetworksPage} />
          <Route exact path="/finance" component={FinancePage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/forgot" component={ForgotPasswordPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </MockServer>
  );
};

export default App;
