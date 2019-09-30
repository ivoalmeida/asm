import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import MockServer from '../../containers/mock-server';
import UsersPage from '.';

storiesOf('Users Page', module).add('Users data grid', () => (
  <MockServer>
    <Router>
      <UsersPage />
    </Router>
  </MockServer>
));
