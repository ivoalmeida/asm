import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import PageTemplate from '../../components/templates/page';
import Box from '../../components/atoms/box';
import withAccounts from '../../containers/with-accounts';
import { IActioMenuItem } from '../../components/organisms/actions-menu';
import DataTable, { IDataColumn } from '../../components/organisms/data-table';
import IconButton from '../../components/molecules/icon-button';
import CtaContainer from '../../components/atoms/cta-container';
import Spinner from '../../components/atoms/spinner';

const ACCOUNTS_QUERY = gql`
  query AccountsQuery($offset: Int, $limit: Int) {
    accounts(offset: $offset, limit: $limit) {
      result {
        accountId
        name
        type
        contactName
        accountManager
        created
        status
      }
      count
    }
  }
`;

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
    name: 'account id',
    sortable: false,
  },
  {
    name: 'name',
    sortable: true,
  },
  {
    name: 'type',
    sortable: true,
  },
  {
    name: 'contact mame',
    sortable: false,
  },
  {
    name: 'account manager',
    sortable: false,
  },
  {
    name: 'created',
    sortable: false,
  },
  {
    name: 'status',
    sortable: false,
  },
];

const AccountsDataGrid = ({ accounts }: { accounts: any[] }) => (
  <DataTable
    columns={columns}
    actions={actions}
    rows={accounts}
    onDataSelect={e => e.preventDefault()}
  />
);

const AccountsPage = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [offset, setOffset] = React.useState<number>(0);
  const [limit, setLimit] = React.useState<number>(7);
  const { loading, data, error, fetchMore } = useQuery(ACCOUNTS_QUERY, {
    variables: { offset, limit },
  });
  const loadMoreData = () => {
    fetchMore({
      variables: {
        offset: offset + limit,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        setOffset(offset + limit);
        setCurrentPage(currentPage + 1);
        return Object.assign({}, prev, {
          result: [...prev.accounts.result, ...fetchMoreResult.accounts.result],
        });
      },
    });
  };
  const loadPreviousPage = () => {
    fetchMore({
      variables: {
        offset: offset - limit,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        if (offset > 0) {
          setOffset(offset - limit);
        }
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
        return Object.assign({}, prev, {
          result: [...prev.accounts.result, ...fetchMoreResult.accounts.result],
        });
      },
    });
  };
  return (
    <PageTemplate>
      <Box>
        <h1>Accounts</h1>
      </Box>
      <Box padding="20px 0" width="100vw" justifyContent="flex-end">
        <CtaContainer>
          <IconButton variant="default" icon="filter" size="small">
            Filter
          </IconButton>
          <IconButton variant="default" icon="eye" size="small">
            Table Content
          </IconButton>
          <IconButton variant="secondary" icon="plus" size="small">
            Create New
          </IconButton>
        </CtaContainer>
      </Box>
      {error ? <span style={{ color: 'red' }}>{error}</span> : null}
      {loading ? (
        <Spinner size="xlarge" />
      ) : (
        <DataTable
          columns={columns}
          actions={actions}
          rows={data.accounts.result}
          pagination={{
            initialPage: currentPage,
            recordCount: data.accounts.count,
            pageSize: limit,
            onPagePrev: loadPreviousPage,
            onPageNext: loadMoreData,
          }}
          onDataSelect={e => e.preventDefault()}
        />
      )}
    </PageTemplate>
  );
};

export default AccountsPage;
