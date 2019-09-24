import * as React from 'react';
import cn from 'classnames';

import Input from '../../atoms/input';
import ActionMenu, { IActioMenuItem } from '../../organisms/actionsMenu';
import * as styles from './styles.scss';
import IconButton from '../../molecules/iconButton';
import style from 'react-syntax-highlighter/dist/styles/hljs/gruvbox-light';

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

  return (
    <div className={styles.dataTable}>
      <table
        style={{
          gridTemplateColumns: `35px repeat(${columns.length}, 1fr) 55px`,
        }}
      >
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            {columns.map((column, index) => (
              <th key={index}>{column.name}</th>
            ))}
            <th />
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <input type="checkbox" />
              </td>
              {Object.entries(row).map(([key, value], columnIndex) => (
                <td key={columnIndex}>{value}</td>
              ))}
              <td>
                <IconButton
                  icon="actions"
                  onClick={(ev: React.SyntheticEvent) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    toggleActionsMenuVisibility(!isActionsMenuOpen);
                    setSelectedRow(rowIndex);
                  }}
                />{' '}
                <ActionMenu
                  items={actions}
                  visible={rowIndex === selectedRow && isActionsMenuOpen}
                  onMouseLeave={(ev: React.SyntheticEvent) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    toggleActionsMenuVisibility(!isActionsMenuOpen);
                    setSelectedRow(rowIndex);
                  }}
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
