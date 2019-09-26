import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import { LinkButton } from '../../atoms/button';
import NavBar from '.';

storiesOf('NavBar', module).add('NavBar  with LinkButtons', () => (
  <NavBar>
    <LinkButton variant="nav-item" href="/Users">
      Users
    </LinkButton>
    <LinkButton variant="nav-item" href="/Roles">
      Roles
    </LinkButton>
  </NavBar>
));
//   .add('NavBar  with NavLink', () => (
//     <NavBar>
//       <NavLink to="/accounts">Accounts</NavLink>
//       <NavLink to="/users">Users</NavLink>
//       <NavLink to="/networks">Networks</NavLink>
//       <NavLink to="/finance">Finance</NavLink>
//     </NavBar>
//   ));
