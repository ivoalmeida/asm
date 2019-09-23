import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';
import Icon from '../../atoms/icon';

export interface IActioMenuItem {
  name: string;
  iconType: string;
  onClick: (ev: React.SyntheticEvent) => void;
}

interface IProps {
  items: IActioMenuItem[];
}

const ActionsMenu: React.FC<IProps> = ({ items }) => {
  return (
    <div className={styles.actionsMenu}>
      {items.map((item, index) => (
        <a
          className={cn(styles.item, { [styles.danger]: item.iconType === 'trash' })}
          key={index}
          href="#"
          onClick={item.onClick}
        >
          <Icon variant={item.iconType} />
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default ActionsMenu;
