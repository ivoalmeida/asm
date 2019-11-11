import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import * as faker from 'faker';

import { IActioMenuItem } from '../actions-menu';
import DataTable, { IDataColumn, IDataTableProps } from '.';

describe('DataTable tests', () => {
  const wrap = (props?: IDataTableProps) => mount(<DataTable {...props} />);

  it('should render with empty arrays', () => {
    const wrapper = wrap({ columns: [], rows: [], actions: [] });
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('should render with columns prop', () => {
    const columns: IDataColumn[] = [
      {
        name: 'name',
        label: 'name',
        sortable: false,
        visible: true,
      },
      {
        name: 'email',
        label: 'email',
        sortable: false,
        visible: true,
      },
    ];
    const wrapper = wrap({ columns, rows: [], actions: [] });
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('should render with columns and data rows prop', () => {
    const columns: IDataColumn[] = [
      {
        name: 'name',
        label: 'name',
        sortable: false,
        visible: true,
      },
      {
        name: 'email',
        label: 'email',
        sortable: false,
        visible: true,
      },
    ];

    const rows = [];
    for (let i = 0; i < 50; i++) {
      rows.push({
        name: faker.random.uuid(),
        email: faker.internet.email('some', 'one', faker.internet.domainName()),
      });
    }

    const wrapper = wrap({ columns, rows, actions: [] });
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('should render with columns, actions and data rows prop', () => {
    const columns: IDataColumn[] = [
      {
        name: 'name',
        label: 'name',
        sortable: false,
        visible: true,
      },
      {
        name: 'email',
        label: 'email',
        sortable: false,
        visible: true,
      },
    ];

    const rows = [];
    for (let i = 0; i < 1; i++) {
      rows.push({
        name: faker.random.uuid(),
        email: faker.internet.email('some', 'one', faker.internet.domainName()),
      });
    }

    const wrapper = wrap({ columns, rows, actions });
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('should not render status component', () => {
    const columns: IDataColumn[] = [
      {
        name: 'name',
        label: 'name',
        sortable: false,
        visible: true,
      },
      {
        name: 'email',
        label: 'email',
        sortable: false,
        visible: true,
      },
    ];

    const rows = [];
    for (let i = 0; i < 1; i++) {
      rows.push({
        name: faker.random.uuid(),
        email: faker.internet.email('some', 'one', faker.internet.domainName()),
      });
    }

    const wrapper = wrap({ columns, rows, actions });
    expect(wrapper.find('.status')).toHaveLength(0);
    wrapper.unmount();
  });

  it('should render status component', () => {
    const columns: IDataColumn[] = [
      {
        name: 'name',
        label: 'name',
        sortable: false,
        visible: true,
      },
      {
        name: 'isActive',
        label: 'Is Active',
        sortable: false,
        visible: true,
      },
    ];

    const rows = [];
    for (let i = 0; i < 1; i++) {
      rows.push({
        name: faker.random.uuid(),
        isActive: faker.random.boolean(),
      });
    }

    const wrapper = wrap({ columns, rows, actions });
    expect(wrapper.find('.status')).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render drag icon button when isDraggable set to true', () => {
    const columns: IDataColumn[] = [
      {
        name: 'name',
        label: 'name',
        sortable: false,
        visible: true,
      },
      {
        name: 'isActive',
        label: 'Is Active',
        sortable: false,
        visible: true,
      },
    ];

    const rows = [];
    for (let i = 0; i < 1; i++) {
      rows.push({
        name: faker.random.uuid(),
        isActive: faker.random.boolean(),
      });
    }

    const wrapper = wrap({ columns, rows, actions, isDraggable: true });
    expect(wrapper.find('.dragButton')).toHaveLength(1);
    wrapper.unmount();
  });

  it('should not render drag icon button when isDraggable set to false', () => {
    const columns: IDataColumn[] = [
      {
        name: 'name',
        label: 'name',
        sortable: false,
        visible: true,
      },
      {
        name: 'isActive',
        label: 'Is Active',
        sortable: false,
        visible: true,
      },
    ];

    const rows = [];
    for (let i = 0; i < 1; i++) {
      rows.push({
        name: faker.random.uuid(),
        isActive: faker.random.boolean(),
      });
    }

    const wrapper = wrap({ columns, rows, actions, isDraggable: false });
    expect(wrapper.find('.dragButton')).toHaveLength(0);
    wrapper.unmount();
  });

  it('should not render drag icon button when isDraggable is unset', () => {
    const columns: IDataColumn[] = [
      {
        name: 'name',
        label: 'name',
        sortable: false,
        visible: true,
      },
      {
        name: 'isActive',
        label: 'Is Active',
        sortable: false,
        visible: true,
      },
    ];

    const rows = [];
    for (let i = 0; i < 1; i++) {
      rows.push({
        name: faker.random.uuid(),
        isActive: faker.random.boolean(),
      });
    }

    const wrapper = wrap({ columns, rows, actions, isDraggable: false });
    expect(wrapper.find('.dragButton')).toHaveLength(0);
    wrapper.unmount();
  });

  it('should render trs as draggable when isDraggable is set to true', () => {
    const columns: IDataColumn[] = [
      {
        name: 'name',
        label: 'name',
        sortable: false,
        visible: true,
      },
      {
        name: 'isActive',
        label: 'Is Active',
        sortable: false,
        visible: true,
      },
    ];

    const rows = [];
    for (let i = 0; i < 1; i++) {
      rows.push({
        name: faker.random.uuid(),
        isActive: faker.random.boolean(),
      });
    }

    const wrapper = wrap({ columns, rows, actions, isDraggable: true });
    expect(wrapper.find('tr.dataTable[draggable=true]')).toHaveLength(1);
    wrapper.unmount();
  });

  it('should not render trs as draggable when isDraggable is set to false', () => {
    const columns: IDataColumn[] = [
      {
        name: 'name',
        label: 'name',
        sortable: false,
        visible: true,
      },
      {
        name: 'isActive',
        label: 'Is Active',
        sortable: false,
        visible: true,
      },
    ];

    const rows = [];
    for (let i = 0; i < 1; i++) {
      rows.push({
        name: faker.random.uuid(),
        isActive: faker.random.boolean(),
      });
    }

    const wrapper = wrap({ columns, rows, actions, isDraggable: false });
    expect(wrapper.find('tr.dataTable[draggable=true]')).toHaveLength(0);
    wrapper.unmount();
  });

  it('should not render trs as draggable when isDraggable is not set', () => {
    const columns: IDataColumn[] = [
      {
        name: 'name',
        label: 'name',
        sortable: false,
        visible: true,
      },
      {
        name: 'isActive',
        label: 'Is Active',
        sortable: false,
        visible: true,
      },
    ];

    const rows = [];
    for (let i = 0; i < 1; i++) {
      rows.push({
        name: faker.random.uuid(),
        isActive: faker.random.boolean(),
      });
    }

    const wrapper = wrap({ columns, rows, actions });
    expect(wrapper.find('tr.dataTable[draggable]')).toHaveLength(0);
    wrapper.unmount();
  });
});

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
