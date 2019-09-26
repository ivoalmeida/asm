import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';

interface IProps {
  children: any;
}

const NavBar: React.FC<IProps> = ({ children }) => {
  return <div className={styles.navBar}>{children}</div>;
};

export default NavBar;
