import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';
import Label from '../../atoms/label';
import Input from '../../atoms/input';
import Checkbox from '../../atoms/checkbox';

interface IProps {
  name: string;
  invalid?: boolean;
  errorMessage?: string;
  label?: string;
  type?: string;
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
  return (
    <div className={cn(styles.field)}>
      {renderInputFirst && <Checkbox {...inputProps} />}
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      {renderInputFirst || <Input {...inputProps} />}
    </div>
  );
};

export default Field;