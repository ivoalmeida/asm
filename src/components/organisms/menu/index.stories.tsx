import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from '.';

storiesOf('Menu', module).add('Menu', () => (
  <Router>
    <Switch>
      <Menu />
    </Switch>
  </Router>
));
