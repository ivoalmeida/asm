import * as React from 'react';

import PageTemplate from '../../components/templates/page';
import Box from '../../components/atoms/box';
import withUsers from '../../containers/with-users';
import Icon from '../../components/atoms/icon';
import { IActioMenuItem } from '../../components/organisms/actions-menu';
import DataTable, { IDataColumn } from '../../components/organisms/data-table';
import NavBar from '../../components/organisms/navbar';
import { LinkButton } from '../../components/atoms/button';
import IconButton from '../../components/molecules/icon-button';

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
      <Box padding="20px 0" width="100vw" justifyContent="space-between">
        <NavBar>
          <LinkButton variant="nav-item" href="/Users">
            Users
          </LinkButton>
          <LinkButton variant="nav-item" href="/Roles">
            Roles
          </LinkButton>
        </NavBar>
        <IconButton variant="secondary" icon="plus" size="small">
          Create New
        </IconButton>
      </Box>
      <Users />
    </PageTemplate>
  );
};

export default UsersPage;
