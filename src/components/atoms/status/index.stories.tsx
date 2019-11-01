import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Status from '.';

storiesOf('Status', module)
  .add('Status active', () => <Status active />)
  .add('Status inactive', () => <Status active={false} />);
