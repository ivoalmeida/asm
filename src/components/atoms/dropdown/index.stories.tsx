import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from '.';

storiesOf('Dropdown', module)
  .add('Dropdown default', () => (
    <Dropdown
      options={[
        { label: 'Option 1', value: 22 },
        { label: 'Option 2', value: 33, default: true },
        { label: 'Option 3', value: 44 },
        { label: 'Option 4', value: 55 },
        { label: 'Option 5', value: 66 },
      ]}
    />
  ))
  .add('Dropdown with label', () => (
    <Dropdown
      label="Sort by"
      placeholder="Relevance"
      options={[
        { label: 'Option 1', value: 22 },
        { label: 'Option 2', value: 33 },
        { label: 'Option 3', value: 44 },
        { label: 'Option 4', value: 55, default: true },
        { label: 'Option 5', value: 66 },
      ]}
    />
  ));
