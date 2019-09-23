import * as React from 'react';
import { Query, ChildProps } from 'react-apollo';
import gql from 'graphql-tag';

const USER_QUERY = gql`
  {
    users {
      userId
      email
      firstName
      lastName
      admin
    }
  }
`;

// TODO: Define proper return interfaces/types
interface IResponse {
  users: any[];
}

const withUsers = (Component: React.SFC<IResponse>) => {
  return class Internal extends React.Component<ChildProps<{}, IResponse>> {
    public render() {
      return (
        <Query query={USER_QUERY}>
          {({ loading, error, data }) => {
            // TODO: Render Spinner component
            if (loading) {
              return <div>Fetching...</div>;
            }
            // TODO: Render custom error component
            if (error) {
              return <div>Error</div>;
            }
            return <Component users={data.users} />;
          }}
        </Query>
      );
    }
  };
};

export default withUsers;
