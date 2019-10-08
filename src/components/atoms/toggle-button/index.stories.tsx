import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ToggleButton from '.';

storiesOf('ToggleButton', module).add('ToggleButton', () => (
  <ToggleButton items={[{ label: 'Active', value: 1 }, { label: 'Inactive', value: 0 }]} />
));
