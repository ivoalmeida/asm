import * as React from 'react';
import cn from 'classnames';
import { NavLink, NavLinkProps } from 'react-router-dom';

import * as styles from './styles.scss';

interface IProps {
  to: string;
  children: any;
}

const NavLinkButton: React.FC<IProps & NavLinkProps> = ({ to, children }) => {
  return (
    <NavLink className={styles.navItem} to={to} activeClassName={cn(styles.navItem, styles.active)}>
      {children}
    </NavLink>
  );
};

export default NavLinkButton;
