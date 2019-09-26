import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from '.';

storiesOf('Checkbox', module)
  .add('Checkbox default', () => <Checkbox />)
  .add('Checkbox checked', () => <Checkbox checked />);
