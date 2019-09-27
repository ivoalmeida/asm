import * as React from 'react';
import { storiesOf } from '@storybook/react';
import * as faker from 'faker';

import { IActioMenuItem } from '../actions-menu';
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

storiesOf('Data Table', module)
  .add('Accounts data table', () => {
    const accountcolumns: IDataColumn[] = [
      {
        name: 'account id',
        sortable: false,
      },
      {
        name: 'name',
        sortable: true,
      },
      {
        name: 'type',
        sortable: true,
      },
      {
        name: 'contact mame',
        sortable: false,
      },
      {
        name: 'account manager',
        sortable: false,
      },
      {
        name: 'created',
        sortable: false,
      },
      {
        name: 'status',
        sortable: false,
      },
    ];

    const accounts = [];
    for (let i = 0; i < 50; i++) {
      accounts.push({
        accountId: faker.random.uuid(),
        name: faker.company.companySuffix(),
        type: faker.company.companyName(),
        contactName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        accountManager: `${faker.name.firstName()} ${faker.name.lastName()}`,
        created: faker.date.past(5, '03-05-2018').toLocaleDateString('en-gb'),
        status: faker.random.boolean() ? 'Active' : 'Inactive',
      });
    }

    return (
      <DataTable
        columns={accountcolumns}
        actions={actions}
        rows={accounts}
        onDataSelect={e => e.preventDefault()}
      />
    );
  })
  .add('Users data table', () => (
    <DataTable
      columns={columns}
      actions={actions}
      rows={rows}
      onDataSelect={e => e.preventDefault()}
    />
  ));
