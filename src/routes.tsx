import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from './auth/authcontext';
import ProtectedRoute from './auth/protectedRoute';
import LoginPage from './pages/login';
import ForgotPasswordPage from './pages/forgot-password';
import UsersPage from './pages/users';
import { SignUpPage } from './pages/signup';
import AccountsPage from './pages/accounts';
import NetworksPage from './pages/networks';
import FinancePage from './pages/finance';
import NotFound from './pages/not-found';

const Routes = () => {
  return (
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
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
