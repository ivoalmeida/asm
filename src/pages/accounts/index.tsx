import * as React from 'react';

import PageTemplate from '../../components/templates/page';
import Box from '../../components/atoms/box';
import withAccounts from '../../containers/with-accounts';
import { IActioMenuItem } from '../../components/organisms/actions-menu';
import DataTable, { IDataColumn } from '../../components/organisms/data-table';
import IconButton from '../../components/molecules/icon-button';
import CtaContainer from '../../components/atoms/cta-container';

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

const Accounts = withAccounts(AccountsDataGrid);

const AccountsPage = () => {
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
      <Accounts />
    </PageTemplate>
  );
};

export default AccountsPage;
