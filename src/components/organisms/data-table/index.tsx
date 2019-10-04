import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';
import ActionMenu, { IActioMenuItem } from '../actions-menu';
import IconButton from '../../molecules/icon-button';
import Checkbox from '../../atoms/checkbox';
import Icon from '../../atoms/icon';

export interface IDataColumn {
  name: string;
  sortable: boolean;
}

interface IProps {
  columns: IDataColumn[];
  actions: IActioMenuItem[];
  rows: any[];
  isDraggable?: boolean;
  onDataSelect?: (ev: React.SyntheticEvent) => void;
}

export const DataTable: React.FC<IProps> = ({
  columns,
  actions,
  rows,
  isDraggable,
  onDataSelect,
}) => {
  const [isActionsMenuOpen, toggleActionsMenuVisibility] = React.useState<boolean>(false);
  const [isSelectAllChecked, setSelectAll] = React.useState<boolean>(false);
  const [isMultipleRecord, setMultipleRecord] = React.useState<boolean>(false);
  const [selectedRow, setSelectedRow] = React.useState<number>();
  const [selectedRows, selectRecord] = React.useState<number[]>([]);
  const [dragSrcRow, setDragSrcRow] = React.useState<HTMLTableRowElement>();
  const [dragging, setDragging] = React.useState(false);
  const tbRef = React.useRef<HTMLTableSectionElement>();

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
            {isDraggable ? <th /> : null}
            <th>
              <Checkbox
                isMultiSelection={isMultipleRecord}
                checked={isSelectAllChecked}
                onChange={e => (e.target.checked = isSelectAllChecked)}
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
        <tbody ref={tbRef}>
          {rows.map((row, rowIndex) => {
            const isSelected = selectedRows.indexOf(rowIndex) > -1;
            return (
              <tr
                draggable={isDraggable}
                onDragStart={e => {
                  e.target.style.opacity = '0.4';
                  setDragSrcRow(e.target);
                  setDragging(true);
                  setSelectedRow(rowIndex);
                  e.dataTransfer.effectAllowed = 'move';
                  e.dataTransfer.setData('text/plain', e.target.outerHTML);
                }}
                onDragOver={e => {
                  e.preventDefault();
                  e.dataTransfer.dropEffect = 'move';
                  return false;
                }}
                // onDragEnter={e=>{

                // }}
                onDrop={(
                  e: React.DragEvent<HTMLTableRowElement> & {
                    target: { parentElement: HTMLTableRowElement };
                  },
                ) => {
                  e.stopPropagation();
                  const refRow = e.target.parentElement;
                  tbRef.current.insertBefore(dragSrcRow, refRow);

                  return false;
                }}
                onDragEnd={e => {
                  e.target.style.opacity = '1.0';
                  setDragging(false);
                }}
                key={rowIndex}
                className={cn(
                  styles.dataTable,
                  {
                    [styles.selectedRow]:
                      isSelected || (isActionsMenuOpen && rowIndex === selectedRow),
                  },
                  { [styles.draggingRow]: dragging && rowIndex === selectedRow },
                )}
              >
                {isDraggable ? (
                  <td>
                    <div className={styles.dragButton}>
                      <Icon variant="drag" />
                    </div>
                  </td>
                ) : null}
                <td>
                  <Checkbox
                    checked={isSelected}
                    onChange={e => (e.target.checked = isSelected)}
                    onClick={() => selectSingleRecord(rowIndex)}
                  />
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
