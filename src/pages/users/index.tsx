import * as React from 'react';

import PageTemplate from '../../components/templates/page';
import Box from '../../components/atoms/box';
import withUsers from '../../containers/with-users';
import Icon from '../../components/atoms/icon';
import { IActioMenuItem } from '../../components/organisms/actions-menu';
import DataTable, { IDataColumn } from '../../components/organisms/data-table';
import NavBar from '../../components/organisms/navbar';
import Button, { LinkButton } from '../../components/atoms/button';
import IconButton from '../../components/molecules/icon-button';
import SidePanel from '../../components/atoms/side-panel';
import Field from '../../components/molecules/field';
import Form from '../../components/organisms/form';

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

const UsersPage: React.FC = () => {
  const [isOpen, toggleSidePanel] = React.useState<boolean>(false);
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
        <IconButton
          variant="secondary"
          icon="plus"
          size="small"
          onClick={() => toggleSidePanel(!isOpen)}
        >
          Create New
        </IconButton>
      </Box>
      <Users />
      <SidePanel isVisible={isOpen}>
        <Form
          title="Create New Users"
          buttons={
            <>
              <Button variant="default" size="medium" onClick={() => toggleSidePanel(!isOpen)}>
                Cancel
              </Button>
              <Button variant="primary" size="medium">
                Submit
              </Button>
            </>
          }
        >
          <Field name="first_name" label="First Name" placeholder="John" />
          <Field name="last_name" label="Last Name" placeholder="Doe" />
          <Field name="email" label="E-mail Address" placeholder="example: john.doe@gmail.com" />
          <Field
            name="role"
            label="User Role"
            type="dropdown"
            options={[
              { label: 'Admin', value: 1 },
              { label: 'God', value: 2 },
              { label: 'Basic', value: 3, default: true },
            ]}
          />
        </Form>
      </SidePanel>
    </PageTemplate>
  );
};

export default UsersPage;
