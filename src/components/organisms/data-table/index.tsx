import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';
import ActionMenu, { IActioMenuItem } from '../actions-menu';
import IconButton from '../../molecules/icon-button';
import Checkbox from '../../atoms/checkbox';
import Icon from '../../atoms/icon';
import Pagination, { IPaginationProps } from '../../molecules/pagination';
import { Box } from '../../atoms/box';
import { dataTablereducer, IState } from './reducer';
import { dataTableActions } from './actions';

export interface IDataColumn {
  name: string;
  label?: string;
  sortable: boolean;
  visible: boolean;
}

interface IProps {
  columns: IDataColumn[];
  actions: IActioMenuItem[];
  rows: any[];
  isDraggable?: boolean;
  pagination?: IPaginationProps;
  onDataSelect?: (ev: React.SyntheticEvent) => void;
}

const initialState: IState = {
  isActionsMenuOpen: false,
  isSelectAllChecked: false,
  isMultipleRecord: false,
  selectedRow: 0,
  selectedRows: [],
  draggedRow: null,
  dragging: false,
};

export const DataTable: React.FC<IProps> = ({
  columns,
  actions,
  rows,
  isDraggable,
  pagination,
  onDataSelect,
}) => {
  const [state, dispatch] = React.useReducer(dataTablereducer, initialState);
  const tBodyRef = React.useRef<HTMLTableSectionElement>();

  const toggleActionsMenu = (ev: React.SyntheticEvent, rowIndex: number) => {
    ev.preventDefault();
    ev.stopPropagation();
    dataTableActions.toggleActionsMenuVisibility(dispatch, !state.isActionsMenuOpen);
    dataTableActions.setSelectedRow(dispatch, rowIndex);
  };

  const selectSingleRecord = (rowIndex: number) => {
    const tmp = [...state.selectedRows];
    if (tmp.length === 0) {
      tmp.push(rowIndex);
    } else {
      const index = tmp.findIndex(r => r === rowIndex);
      if (index > -1) {
        tmp.splice(index, 1);
        dataTableActions.setMultipleRecord(dispatch, state.isSelectAllChecked);
      } else {
        tmp.push(rowIndex);
      }
    }
    dataTableActions.selectRecord(dispatch, tmp);
  };

  const selectAllRecords = ev => {
    const isChecked = ev.target.checked;
    dataTableActions.setSelectAll(dispatch, isChecked);
    if (!isChecked) {
      dataTableActions.selectRecord(dispatch, []);
      dataTableActions.setMultipleRecord(dispatch, false);
      return;
    }
    const tmp = [];
    rows.forEach((row, rowIndex) => tmp.push(rowIndex));
    dataTableActions.selectRecord(dispatch, tmp);
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
    dataTableActions.setDraggedRow(dispatch, currentRow);
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
    tRowRef.insertAdjacentElement(position, state.draggedRow);
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
    const tBodyRows: HTMLCollectionOf<HTMLTableRowElement> & { [x: string]: any } =
      tBodyRef.current.rows;
    tBodyRows.forEach(row => {
      row.classList.remove(styles.draggingRow);
    });
    dataTableActions.setDragging(dispatch, false);
  };

  return (
    <div className={styles.dataTable}>
      <table>
        <thead>
          <tr>
            {isDraggable ? <th /> : null}
            <th>
              <Checkbox
                isMultiSelection={state.isMultipleRecord}
                checked={state.isSelectAllChecked}
                onChange={e => (e.target.checked = state.isSelectAllChecked)}
                onClick={e => selectAllRecords(e)}
              />
            </th>
            {columns
              .filter(column => column.visible)
              .map((column, index) => (
                <th key={index}>
                  <span
                    className={cn(styles.column, {
                      [styles.sortable]: column.sortable,
                    })}
                  >
                    {column.label || column.name}
                  </span>
                </th>
              ))}
            <th />
          </tr>
        </thead>
        <tbody ref={tBodyRef}>
          {rows.map((row, rowIndex) => {
            const isSelected = state.selectedRows.indexOf(rowIndex) > -1;
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
                    isSelected || (state.isActionsMenuOpen && rowIndex === state.selectedRow),
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
                    visible={rowIndex === state.selectedRow && state.isActionsMenuOpen}
                    onMouseLeave={ev => toggleActionsMenu(ev, rowIndex)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        {pagination ? (
          <tfoot>
            <tr>
              <td colSpan={columns.length + (isDraggable ? 3 : 2)}>
                <Box justifyContent="center">
                  <Pagination
                    initialPage={pagination.initialPage}
                    pageSize={pagination.pageSize}
                    recordCount={pagination.recordCount}
                    onPagePrev={pagination.onPagePrev}
                    onPageNext={pagination.onPageNext}
                  />
                </Box>
              </td>
            </tr>
          </tfoot>
        ) : null}
      </table>
    </div>
  );
};

export default DataTable;
