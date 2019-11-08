import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import MockServer from '../../containers/mock-server';
import LoginPage from '.';

storiesOf('LoginPage', module).add('LoginPage', () => (
  <MockServer>
    <Router>
      <LoginPage />
    </Router>
  </MockServer>
));
