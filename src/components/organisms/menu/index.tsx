import * as React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import * as styles from './styles.scss';

const Menu: React.SFC = () => {
  return (
    <div className={cn(styles.navBar)}>
      <NavLink to="/accounts">Accounts</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/networks">Networks</NavLink>
      <NavLink to="/finance">Finance</NavLink>
    </div>
  );
};

export default Menu;
