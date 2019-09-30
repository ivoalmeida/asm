import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';
import ActionMenu, { IActioMenuItem } from '../actions-menu';
import IconButton from '../../molecules/icon-button';
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
  const [isSelectAllChecked, setSelectAll] = React.useState<boolean>(false);
  const [isMultipleRecord, setMultipleRecord] = React.useState<boolean>(false);
  const [selectedRow, setSelectedRow] = React.useState<number>();
  const [selectedRows, selectRecord] = React.useState<number[]>([]);

  const toggleActionsMenu = (ev: React.SyntheticEvent, rowIndex: number) => {
    ev.preventDefault();
    ev.stopPropagation();
    toggleActionsMenuVisibility(!isActionsMenuOpen);
    setSelectedRow(rowIndex);
  };

  const selectSingleRecord = (rowIndex: number) => {
    const tmp = [...selectedRows];
    if (tmp.length === 0) {
      tmp.push(rowIndex);
    } else {
      const index = tmp.findIndex(r => r === rowIndex);
      if (index > -1) {
        tmp.splice(index, 1);
        setMultipleRecord(isSelectAllChecked);
      } else {
        tmp.push(rowIndex);
      }
    }
    selectRecord(tmp);
  };

  const selectAllRecords = ev => {
    const isChecked = ev.target.checked;
    setSelectAll(isChecked);
    if (!isChecked) {
      selectRecord([]);
      setMultipleRecord(false);
      return;
    }
    const tmp = [];
    rows.forEach((row, rowIndex) => tmp.push(rowIndex));
    selectRecord(tmp);
  };

  return (
    <div className={styles.dataTable}>
      <table>
        <thead>
          <tr>
            <th>
              <Checkbox
                isMultiSelection={isMultipleRecord}
                checked={isSelectAllChecked}
                onClick={e => selectAllRecords(e)}
              />
            </th>
            {columns.map((column, index) => (
              <th key={index}>
                <span
                  className={cn(styles.column, {
                    [styles.sortable]: column.sortable,
                  })}
                >
                  {column.name}
                </span>
              </th>
            ))}
            <th />
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            const isSelected = selectedRows.indexOf(rowIndex) > -1;
            return (
              <tr
                key={rowIndex}
                className={cn(styles.dataTable, {
                  [styles.selectedRow]:
                    isSelected || (isActionsMenuOpen && rowIndex === selectedRow),
                })}
              >
                <td>
                  <Checkbox checked={isSelected} onClick={() => selectSingleRecord(rowIndex)} />
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;