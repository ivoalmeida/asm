import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import PageTemplate from '../../components/templates/page';
import Box from '../../components/atoms/box';
import withUsers from '../../containers/withUsers';

const UserDataGrid = ({ users }: { users: any[] }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{`${user.name} | ${user.email}`}</li>
      ))}
    </ul>
  );
};

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
