import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Profile from '.';

storiesOf('Profile', module).add('Profile', () => (
  <Profile user={{ name: 'John', surname: 'Doe' }} />
));
