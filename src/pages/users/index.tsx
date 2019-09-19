import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import PageTemplate from '../../components/templates/page';
import Box from '../../components/atoms/box';

const USER_QUERY = gql`
  {
    users {
      name
      email
    }
  }
`;

const UsersPage = () => {
  return (
    <PageTemplate>
      <Box>
        <h1>Users</h1>
      </Box>
      <Box>
        <Query query={USER_QUERY}>
          {({ loading, error, data }) => {
            if (loading) {
              return <div>Fetching...</div>;
            }
            if (error) {
              return <div>Error</div>;
            }

            const users = data.users;

            return (
              <ul>
                {users.map((user, index) => (
                  <li key={index}>{`${user.name} | ${user.email}`}</li>
                ))}
              </ul>
            );
          }}
        </Query>
      </Box>
    </PageTemplate>
  );
};

export default UsersPage;
