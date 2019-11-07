import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Masthead from '.';

storiesOf('Masthead', module).add('Masthead', () => (
  <Router>
    <Masthead />
  </Router>
));
