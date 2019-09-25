import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Spinner from '.';

storiesOf('Spinner', module)
  .add('Spinner default', () => <Spinner />)
  .add('Spinner xsmall', () => <Spinner size="xsmall" />)
  .add('Spinner small', () => <Spinner size="small" />)
  .add('Spinner medium', () => <Spinner size="medium" />)
  .add('Spinner large', () => <Spinner size="large" />)
  .add('Spinner xlarge', () => <Spinner size="xlarge" />);
