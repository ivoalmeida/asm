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
import EditAccount from './edit-account';
import TableContent from '../../components/molecules/table-content';

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
    label: 'account id',
    name: 'accountId',
    sortable: false,
    visible: true,
  },
  {
    label: 'name',
    name: 'name',
    sortable: true,
    visible: true,
  },
  {
    label: 'type',
    name: 'type',
    sortable: true,
    visible: true,
  },
  {
    label: 'contact name',
    name: 'contactName',
    sortable: false,
    visible: true,
  },
  {
    label: 'account manager',
    name: 'accountManager',
    sortable: false,
    visible: true,
  },
  {
    label: 'created',
    name: 'created',
    sortable: false,
    visible: true,
  },
  {
    label: 'status',
    name: 'status',
    sortable: false,
    visible: true,
  },
];

const AccountsPage = () => {
  const [isTBVisible, toggleTb] = React.useState(false);
  const [cols, setCols] = React.useState(columns);
  const [isFormVisible, toggleFormVisible] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [offset, setOffset] = React.useState<number>(0);
  const [limit, setLimit] = React.useState<number>(5);
  const { loading, data, error } = useQuery(ACCOUNTS_QUERY, {
    variables: { offset, limit },
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

  const initialCols = cols.map(({ name, label, visible }) => {
    return { label, name, isChecked: visible };
  });

  const setTableColumns = ev => {
    const { name, checked } = ev.target;
    const tmp = [...columns];
    tmp.forEach(col => {
      if (col.name === name) {
        col.visible = checked;
      }
    });
    setCols(tmp);
    toggleTb(!isTBVisible);
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
          <div style={{ position: 'relative' }}>
            <IconButton
              variant="default"
              icon="eye"
              size="small"
              onClick={() => toggleTb(!isTBVisible)}
            >
              Table Content
            </IconButton>
            {isTBVisible && <TableContent items={initialCols} handleChange={setTableColumns} />}
          </div>
          <IconButton
            variant="secondary"
            icon="plus"
            size="small"
            onClick={() => toggleFormVisible(!isFormVisible)}
          >
            Create New
          </IconButton>
        </CtaContainer>
      </Box>
      <EditAccount isOpen={isFormVisible} onCancel={() => toggleFormVisible(!isFormVisible)} />
      {error ? <span style={{ color: 'red' }}>{error}</span> : null}
      {loading ? (
        <Spinner size="xlarge" />
      ) : (
        <DataTable
          columns={cols}
          actions={actions}
          rows={data.accounts.result}
          pagination={{
            initialPage: currentPage,
            recordCount: data.accounts.count,
            pageSize: limit,
            onPagePrev: () => {
              if (offset > 0) {
                setOffset(offset - limit);
              }
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            },
            onPageNext: () => {
              setOffset(offset + limit);
              setCurrentPage(currentPage + 1);
            },
          }}
          onDataSelect={e => e.preventDefault()}
        />
      )}
    </PageTemplate>
  );
};

export default AccountsPage;
