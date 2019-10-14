import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';

interface IProps {
  name: string;
}

const ToggleRadio: React.FC<IProps> = ({ name }) => {
  return (
    <div className={cn(styles.toggleRadio)}>
      <input type="radio" name={name} />
    </div>
  );
};

export default ToggleRadio;
