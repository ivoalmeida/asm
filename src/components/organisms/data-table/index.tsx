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
  const [draggedRow, setDraggedRow] = React.useState<HTMLTableRowElement>();
  const [dragging, setDragging] = React.useState(false);
  const tBodyRef = React.useRef<HTMLTableSectionElement>();

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
  const overrideEventDefaults = (event: Event | React.DragEvent<HTMLTableRowElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const dragStartListener = (
    event: React.DragEvent<HTMLTableRowElement> & {
      target: HTMLTableRowElement & { outerHTML: any };
    },
  ) => {
    const currentRow = event.target.closest('tr');
    currentRow.classList.add(styles.draggedRow);
    setDraggedRow(currentRow);
  };

  const dragOverListener = event => {
    overrideEventDefaults(event);
    event.dataTransfer.dropEffect = 'move';
    return false;
  };

  const dropListener = (
    event: React.DragEvent<HTMLTableRowElement> & {
      target: { closest: (type: string) => HTMLTableRowElement };
    },
  ) => {
    overrideEventDefaults(event);
    const tRowRef = event.target.closest('tr');
    const position = tRowRef.rowIndex === 1 ? 'beforebegin' : 'afterend';
    tRowRef.insertAdjacentElement(position, draggedRow);
    return false;
  };

  const dragEnterListener = (
    event: React.DragEvent<HTMLTableRowElement> & {
      target: { closest: (type: string) => HTMLTableRowElement };
    },
  ) => {
    overrideEventDefaults(event);
    const currentRow = event.target.closest('tr');
    currentRow.classList.add(styles.draggingRow);
  };

  const dragLeaveListener = (
    event: React.DragEvent<HTMLTableRowElement> & {
      target: { closest: (type: string) => HTMLTableRowElement };
    },
  ) => {
    overrideEventDefaults(event);
    const currentRow = event.target.closest('tr');
    currentRow.classList.remove(styles.draggingRow);
  };

  const dragEndListener = event => {
    const currentRow = event.target;
    currentRow.classList.remove(styles.draggedRow);
    // currentRow.style.transform = `translateY(${offset}px)`;
    for (let i = 0; i < tBodyRef.current.rows.length; i++) {
      rows[i].classList.remove(styles.draggingRow);
    }
    setDragging(false);
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
        <tbody ref={tBodyRef}>
          {rows.map((row, rowIndex) => {
            const isSelected = selectedRows.indexOf(rowIndex) > -1;
            return (
              <tr
                draggable={isDraggable}
                onDragStart={dragStartListener}
                onDragOver={dragOverListener}
                onDrop={dropListener}
                onDragEnter={dragEnterListener}
                onDragLeave={dragLeaveListener}
                onDragEnd={dragEndListener}
                key={rowIndex}
                className={cn(styles.dataTable, {
                  [styles.selectedRow]:
                    isSelected || (isActionsMenuOpen && rowIndex === selectedRow),
                })}
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
