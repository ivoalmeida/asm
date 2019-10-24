import * as React from 'react';
import { storiesOf } from '@storybook/react';

import TableContent from '.';

storiesOf('Table Content', module).add('Table Content', () => (
  <TableContent
    handleChange={ev => 1 === 1}
    items={[
      { name: 'Name', label: 'Name', isChecked: true },
      { name: 'Surname', label: 'Surname', isChecked: true },
      { name: 'Address', label: 'Address', isChecked: true },
      { name: 'Date', label: 'Date of birth', isChecked: false },
    ]}
  />
));
