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
    label: 'user id',
    sortable: false,
    visible: true,
  },
  {
    name: 'email',
    label: 'email',
    sortable: false,
    visible: true,
  },
  {
    name: 'first name',
    label: 'first name',
    sortable: true,
    visible: true,
  },
  {
    name: 'last name',
    label: 'last name',
    sortable: true,
    visible: true,
  },
  {
    name: 'admin',
    label: 'admin',
    sortable: false,
    visible: true,
  },
];

const rows = [];
for (let i = 0; i < 50; i++) {
  rows.push({
    userId: faker.random.uuid(),
    email: faker.internet.email('some', 'one', faker.internet.domainName()),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    admin: faker.random.boolean(),
  });
}

storiesOf('Data Table', module)
  .add('Accounts data table', () => {
    const accountcolumns: IDataColumn[] = [
      {
        name: 'account id',
        label: 'account id',
        sortable: false,
        visible: true,
      },
      {
        name: 'name',
        label: 'name',
        sortable: true,
        visible: true,
      },
      {
        name: 'type',
        label: 'type',
        sortable: true,
        visible: true,
      },
      {
        name: 'contact mame',
        label: 'contact mame',
        sortable: false,
        visible: true,
      },
      {
        name: 'account manager',
        label: 'account manager',
        sortable: false,
        visible: true,
      },
      {
        name: 'created',
        label: 'created',
        sortable: false,
        visible: true,
      },
      {
        name: 'status',
        label: 'status',
        sortable: false,
        visible: true,
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
        status: faker.random.boolean(),
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
  ))
  .add('Draggable data table', () => {
    const data = [];
    for (let i = 0; i < 5; i++) {
      data.push({
        userId: i,
        email: faker.internet.email('some', 'one', faker.internet.domainName()),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        admin: faker.random.boolean(),
      });
    }
    return (
      <DataTable
        isDraggable
        columns={columns}
        actions={actions}
        rows={data}
        onDataSelect={e => e.preventDefault()}
      />
    );
  });
