import actionsTypes from './constants';

export interface IState {
  isActionsMenuOpen: boolean;
  isSelectAllChecked: boolean;
  isMultipleRecord: boolean;
  selectedRow: number;
  selectedRows: number[];
  draggedRow: HTMLTableRowElement;
  dragging: boolean;
}

export const dataTablereducer = (state: IState, action: { type: string; data: any }) => {
  switch (action.type) {
    case actionsTypes.ACTION_MENU_TOGGLE: {
      return { ...state, isActionsMenuOpen: action.data };
    }
    case actionsTypes.SELECT_ALL_TOGGLE: {
      return { ...state, isSelectAllChecked: action.data };
    }
    case actionsTypes.MULTIPLE_RECORDS_TOGGLE: {
      return { ...state, isMultipleRecord: action.data };
    }
    case actionsTypes.ROW_SELECT: {
      return { ...state, selectedRow: action.data };
    }
    case actionsTypes.ROW_LIST_SELECT: {
      return { ...state, selectedRows: action.data };
    }
    case actionsTypes.DRAGGED_ROW_SET: {
      return { ...state, draggedRow: action.data };
    }
    case actionsTypes.DRAGGING_TOGGLE: {
      return { ...state, dragging: action.data };
    }
    default:
      return state;
  }
};
