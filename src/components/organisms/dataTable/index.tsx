import * as React from 'react';

import Input from '../../atoms/input';
import ActionMenu, { IActioMenuItem } from '../../organisms/actionsMenu';
import * as styles from './styles.scss';
import IconButton from '../../molecules/iconButton';

export interface IDataColumn {
  name: string;
  sortable: boolean;
}

interface IProps {
  columns: IDataColumn[];
  actions: IActioMenuItem[];
  rows: any[];
  onDataSelect?: (ev: React.SyntheticEvent) => void;
}

const calculateGridColumns = (nmrcolumns: number) => {
  return `minmax(150px, 1fr)`;
};

const DataTable: React.FC<IProps> = ({ columns, actions, rows, onDataSelect }) => {
  const [isActionsMenuOpen, toggleActionsMenuVisibility] = React.useState<boolean>(false);
  return (
    <div className={styles.dataTable}>
      <table
        style={{
          gridTemplateColumns: `repeat(${columns.length + 1}, 1fr)`,
        }}
      >
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.name}</th>
            ))}
            <th />
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((item, i) => (
                <td key={i}>{item}</td>
              ))}
              <td>
                <IconButton variant="default" icon="actions" size="medium" />{' '}
                {isActionsMenuOpen && <ActionMenu items={actions} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
