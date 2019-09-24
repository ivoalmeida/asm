import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import PageTemplate from '../../components/templates/page';
import Box from '../../components/atoms/box';
import withUsers from '../../containers/withUsers';
import Icon from '../../components/atoms/icon';
import { IActioMenuItem } from '../../components/organisms/actionsMenu';
import DataTable, { IDataColumn } from '../../components/organisms/dataTable';

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

const UserDataGrid = ({ users }: { users: any[] }) => (
  <DataTable
    columns={columns}
    actions={actions}
    rows={users}
    onDataSelect={e => e.preventDefault()}
  />
);

const Users = withUsers(UserDataGrid);

const UsersPage = () => {
  return (
    <PageTemplate>
      <Box>
        <h1>Users</h1>
      </Box>
      <Box>
        <Users />
      </Box>
    </PageTemplate>
  );
};

export default UsersPage;
