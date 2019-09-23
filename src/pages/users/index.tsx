import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import PageTemplate from '../../components/templates/page';
import Box from '../../components/atoms/box';
import withUsers from '../../containers/withUsers';
import Icon from '../../components/atoms/icon';

const UserDataGrid = ({ users }: { users: any[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>User Id</th>
          <th>E-mail Address</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Admin</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.userId}</td>
            <td>
              <strong>{user.email}</strong>
            </td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.admin}</td>
            <td>
              <Icon
                variant="actions"
                styles={{
                  border: '1px solid #adadad',
                  padding: '12px 8px',
                  borderRadius: '3px',
                  color: '#adadad',
                  fontSize: '2px',
                  cursor: 'pointer',
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
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
