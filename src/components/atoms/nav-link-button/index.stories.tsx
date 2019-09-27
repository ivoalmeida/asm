import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import NavLinkButton from '.';

storiesOf('NavLinkButton', module).add('NavLinkButton', () => (
  <Router>
    <NavLinkButton to="/">Home</NavLinkButton>
  </Router>
));
