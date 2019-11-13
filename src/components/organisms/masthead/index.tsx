import * as React from 'react';
import classNames from 'classnames';

import * as styles from './styles.scss';
import Box from '../../atoms/box';
import { LogoMastHead } from '../../atoms/logo';
import { LinkButton } from '../../atoms/button';
import SearchBox from '../../molecules/search-box';
import NavBar from '../navbar';
import NavLinkButton from '../../atoms/nav-link-button';
import Profile from '../profile';

export const Masthead = () => {
  return (
    <Box direction="row" justifyContent="space-between" alignItems="center">
      <Box direction="row" justifyContent="flex-start" alignItems="center" width="100%">
        <Box padding={'0 25px 0 0'}>
          <LogoMastHead />
        </Box>
        <Box>
          <NavBar>
            <NavLinkButton to="/accounts">Accounts</NavLinkButton>
            <NavLinkButton to="/users">Users</NavLinkButton>
            <NavLinkButton to="/networks">Networks</NavLinkButton>
            <NavLinkButton to="/finance">Finance</NavLinkButton>
          </NavBar>
        </Box>
        <Box margin="0 0 0 80px">
          <SearchBox />
        </Box>
      </Box>
      <Profile user={{ name: 'John', surname: 'Doe' }} />
    </Box>
  );
};

export default Masthead;
