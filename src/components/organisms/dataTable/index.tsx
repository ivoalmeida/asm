import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';
import ActionMenu, { IActioMenuItem } from '../../organisms/actionsMenu';
import IconButton from '../../molecules/iconButton';
import Checkbox from '../../atoms/checkbox';

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

export const DataTable: React.FC<IProps> = ({ columns, actions, rows, onDataSelect }) => {
  const [isActionsMenuOpen, toggleActionsMenuVisibility] = React.useState<boolean>(false);
  const [selectedRow, setSelectedRow] = React.useState<number>();
  const [selectedRows, selectRecord] = React.useState<number[]>([]);

  const toggleActionsMenu = (ev: React.SyntheticEvent, rowIndex: number) => {
    ev.preventDefault();
    ev.stopPropagation();
    toggleActionsMenuVisibility(!isActionsMenuOpen);
    setSelectedRow(rowIndex);
    selectSingleRecord(rowIndex);
  };

  const selectSingleRecord = (rowIndex: number) => {
    const tmp = [...selectedRows];
    if (tmp.length === 0) {
      tmp.push(rowIndex);
    } else {
      const index = tmp.findIndex(r => r === rowIndex);
      if (index > -1) {
        delete tmp[index];
      } else {
        tmp.push(rowIndex);
      }
    }
    selectRecord(tmp);
  };

  return (
    <div className={styles.dataTable}>
      <table>
        <thead>
          <tr>
            <th>
              <Checkbox />
            </th>
            {columns.map((column, index) => (
              <th key={index}>{column.name}</th>
            ))}
            <th />
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn(styles.dataTable, {
                [styles.selectedRow]: selectedRows.indexOf(rowIndex) > -1,
              })}
            >
              <td>
                <Checkbox onClick={() => selectSingleRecord(rowIndex)} />
              </td>
              {Object.entries(row).map(([key, value], columnIndex) => (
                <td key={columnIndex}>{value}</td>
              ))}
              <td>
                <IconButton icon="actions" onClick={ev => toggleActionsMenu(ev, rowIndex)} />{' '}
                <ActionMenu
                  items={actions}
                  visible={rowIndex === selectedRow && isActionsMenuOpen}
                  onMouseLeave={ev => toggleActionsMenu(ev, rowIndex)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
