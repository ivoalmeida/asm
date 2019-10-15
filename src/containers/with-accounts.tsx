import * as React from 'react';
import { Query, ChildProps } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from '../components/atoms/spinner';

const ACCOUNTS_QUERY = gql`
  {
    accounts {
      result {
        accountId
        name
        type
        contactName
        accountManager
        created
        status
      }
    }
  }
`;

// TODO: Define proper return interfaces/types
interface IResponse {
  accounts: any[];
}

const withAccounts = (Component: React.FC<IResponse>) => {
  return class Internal extends React.Component<ChildProps<{}, IResponse>> {
    public render() {
      return (
        <Query query={ACCOUNTS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) {
              return <Spinner size="large" />;
            }
            // TODO: Render custom error component
            if (error) {
              return <div>Error</div>;
            }
            return <Component accounts={data.accounts.result} />;
          }}
        </Query>
      );
    }
  };
};

export default withAccounts;
