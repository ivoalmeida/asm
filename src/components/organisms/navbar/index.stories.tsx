import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import { LinkButton } from '../../atoms/button';
import NavLinkButton from '../../atoms/nav-link-button';
import NavBar from '.';

storiesOf('NavBar', module)
  .add('NavBar  with LinkButtons', () => (
    <NavBar>
      <LinkButton variant="nav-item" href="/Users">
        Users
      </LinkButton>
      <LinkButton variant="nav-item" href="/Roles">
        Roles
      </LinkButton>
    </NavBar>
  ))
  .add('NavBar  with NavLinkButton', () => (
    <Router>
      <NavBar>
        <NavLinkButton to="/">Home</NavLinkButton>
        <NavLinkButton to="/accounts">Accounts</NavLinkButton>
        <NavLinkButton to="/users">Users</NavLinkButton>
        <NavLinkButton to="/networks">Networks</NavLinkButton>
        <NavLinkButton to="/finance">Finance</NavLinkButton>
      </NavBar>
    </Router>
  ));
