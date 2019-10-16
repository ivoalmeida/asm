import actionTypes from './constants';

const toggleActionsMenuVisibility = (dispatch: (action: any) => any, isActionsMenuOpen: boolean) =>
  dispatch({
    type: actionTypes.ACTION_MENU_TOGGLE,
    data: isActionsMenuOpen,
  });

const setSelectAll = (dispatch: (action: any) => any, isSelectAllChecked: boolean) =>
  dispatch({
    type: actionTypes.SELECT_ALL_TOGGLE,
    data: isSelectAllChecked,
  });

const setMultipleRecord = (dispatch: (action: any) => any, isMultipleRecord: boolean) =>
  dispatch({
    type: actionTypes.MULTIPLE_RECORDS_TOGGLE,
    data: isMultipleRecord,
  });

const setSelectedRow = (dispatch: (action: any) => any, rowIndex: number) =>
  dispatch({
    type: actionTypes.ROW_SELECT,
    data: rowIndex,
  });

const selectRecord = (dispatch: (action: any) => any, rowIndexList: number[]) =>
  dispatch({
    type: actionTypes.ROW_LIST_SELECT,
    data: rowIndexList,
  });

const setDraggedRow = (dispatch: (action: any) => any, currentRow: HTMLTableRowElement) =>
  dispatch({
    type: actionTypes.DRAGGED_ROW_SET,
    data: currentRow,
  });

const setDragging = (dispatch: (action: any) => any, isDragging: boolean) =>
  dispatch({
    type: actionTypes.DRAGGING_TOGGLE,
    data: isDragging,
  });

export const dataTableActions = {
  toggleActionsMenuVisibility,
  setSelectAll,
  setMultipleRecord,
  setSelectedRow,
  selectRecord,
  setDraggedRow,
  setDragging,
};
