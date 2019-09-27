import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ActionMenu, { IActioMenuItem } from '.';

const items: IActioMenuItem[] = [
  {
    name: 'Edit',
    iconType: 'edit',
    onClick: ev => ev.preventDefault(),
  },
  {
    name: 'Duplicate',
    iconType: 'duplicate',
    onClick: ev => ev.preventDefault(),
  },
  {
    name: 'Disable',
    iconType: 'disabled',
    onClick: ev => ev.preventDefault(),
  },
  {
    name: 'Delete',
    iconType: 'trash',
    onClick: ev => ev.preventDefault(),
  },
];

storiesOf('Action Menu', module).add('Action menu', () => <ActionMenu items={items} />);
