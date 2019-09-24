import * as React from 'react';
import { storiesOf } from '@storybook/react';
import * as faker from 'faker';

import { IActioMenuItem } from '../actionsMenu';
import DataTable, { IDataColumn } from '.';

const actions: IActioMenuItem[] = [
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

const columns: IDataColumn[] = [
  {
    name: 'user id',
    sortable: false,
  },
  {
    name: 'email',
    sortable: false,
  },
  {
    name: 'first name',
    sortable: true,
  },
  {
    name: 'last name',
    sortable: true,
  },
  {
    name: 'admin',
    sortable: false,
  },
];

const rows = [];
for (let i = 0; i < 50; i++) {
  rows.push({
    userId: faker.random.uuid(),
    email: faker.internet.email('some', 'one', faker.internet.domainName()),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    admin: faker.random.boolean() ? 'Yes' : 'No',
  });
}

storiesOf('Data Table', module).add('Data table', () => (
  <DataTable
    columns={columns}
    actions={actions}
    rows={rows}
    onDataSelect={e => e.preventDefault()}
  />
));
