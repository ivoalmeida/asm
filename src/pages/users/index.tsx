import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageTemplate from '../../components/templates/page';
import Box from '../../components/atoms/box';
import withUsers from '../../containers/with-users';
import Icon from '../../components/atoms/icon';
import { IActioMenuItem } from '../../components/organisms/actions-menu';
import DataTable, { IDataColumn } from '../../components/organisms/data-table';
import NavBar from '../../components/organisms/navbar';
import Button from '../../components/atoms/button';
import IconButton from '../../components/molecules/icon-button';
import SidePanel from '../../components/atoms/side-panel';
import Field from '../../components/molecules/field';
import Form from '../../components/organisms/form';
import NavLinkButton from '../../components/atoms/nav-link-button';

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

const UserDataGrid = ({ users }: { users: any[] }) => (
  <DataTable
    columns={columns}
    actions={actions}
    rows={users}
    onDataSelect={e => e.preventDefault()}
  />
);

const Users = withUsers(UserDataGrid);

const Roles = () => (
  <div style={{ backgroundColor: 'red', height: '300px', width: '400px' }}>Roles</div>
);

const UsersPage: React.FC<{ match?: { url: string }; path?: string }> = ({ match, path }) => {
  const [isOpen, toggleSidePanel] = React.useState<boolean>(false);
  return (
    <PageTemplate>
      <Box>
        <h1>Users</h1>
      </Box>
      <Box padding="20px 0" width="100vw" justifyContent="space-between">
        <NavBar>
          <NavLinkButton to="/users">Users</NavLinkButton>
          <NavLinkButton to={`${match.url}/roles`}>Roles</NavLinkButton>
        </NavBar>
        <Switch>
          <Route exact path={`${path}/roles`}>
            <Roles />
          </Route>
        </Switch>
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
              <Button
                variant="default"
                size="medium"
                type="button"
                onClick={() => toggleSidePanel(!isOpen)}
              >
                Cancel
              </Button>
              <Button variant="primary" size="medium" type="submit">
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
