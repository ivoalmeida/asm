import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';
import Label from '../../atoms/label';
import Input, { Textarea } from '../../atoms/input';
import Checkbox from '../../atoms/checkbox';
import Dropdown from '../../atoms/dropdown';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  invalid?: boolean;
  errorMessage?: string;
  label?: string;
  options?: any[];
}

const Field: React.FC<IProps> = ({
  name,
  invalid,
  errorMessage,
  label,
  type = 'text',
  ...props
}) => {
  const renderInputFirst = type === 'checkbox' || type === 'radio';
  const inputProps = {
    id: name,
    name,
    type,
    errorMessage,
    invalid,
    'aria-describedby': `${name}Error`,
    ...props,
  };
  const field = fieldFactory(type, inputProps, props.options);
  return (
    <div className={cn(styles.field)}>
      {renderInputFirst && field}
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      {!renderInputFirst && field}
    </div>
  );
};

export const fieldFactory = (type: string, inputProps: any, options?: any[]) => {
  const renderInputFirst = type === 'checkbox' || type === 'radio';
  switch (type) {
    case 'checkbox':
      return <Checkbox {...inputProps} />;
    case 'radio':
    case 'input':
      return <Input {...inputProps} />;
    case 'textarea':
      return <Textarea {...inputProps} />;
    case 'dropdown':
      return <Dropdown options={options} {...inputProps} />;
    default:
      return <Input {...inputProps} />;
  }
};

export default Field;
