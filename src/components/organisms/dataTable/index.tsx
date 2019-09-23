import * as React from 'react';
import Input from '../../atoms/input';

export interface IDataColumn {
  name: string;
  sortable: boolean;
}

export interface IDataAction {
  name: string;
  action: (ev: React.SyntheticEvent) => void;
}

interface IProps {
  columns: IDataColumn[];
  actions: IDataAction[];
  data: any[];
  onDataSelect: (ev: React.SyntheticEvent) => void;
}

const DataTable: React.FC<IProps> = ({ columns, actions, data, onDataSelect }) => {
  return (
    <div>
      <div>
        {columns.map((column, index) => (
          <div key={index}>{column}</div>
        ))}
      </div>
      <div>
        {data.map((item, index) => (
          <>
            <div>
              <Input type="checkbox" id={`cbx_${index}_`} />
            </div>
            <div>{item}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
