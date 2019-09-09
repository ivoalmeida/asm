import * as React from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';

interface IMastheadProps {
  children?: any;
}

export const Masthead = (props: IMastheadProps) => {
  return (
    <nav>
      <Logo />
      <MenuBar>
        <Link name="Accounts" href="/accounts" />
        <Link name="Users" href="/users" />
        <Link name="Networks" href="/networks" />
        <Link name="Finance" href="/finance" />
      </MenuBar>
      <Search placeholder="Search on Venatus" />
      <MyAccount />
    </nav>
  );
};

export default Masthead;
