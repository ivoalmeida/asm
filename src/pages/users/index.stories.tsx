import * as React from 'react';
import { storiesOf } from '@storybook/react';

import MockServer from '../../containers/mock-server';
import UsersPage from '.';

storiesOf('Users Page', module).add('Users data grid', () => (
  <MockServer>
    <UsersPage />
  </MockServer>
));
