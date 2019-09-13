import * as React from 'react';
import classNames from 'classnames';

import * as styles from './styles.scss';
import Box from '../../atoms/box';
import { LogoMastHead } from '../../atoms/logo';
import { LinkButton } from '../../atoms/button';
import SearchBox from '../../molecules/searchBox';

export const Masthead = () => {
  return (
    <div className={styles.masthead}>
      <LogoMastHead />
      <Box>
        <LinkButton variant="nav-item" href="/accounts">
          Accounts
        </LinkButton>
        <LinkButton variant="nav-item" href="/users">
          Users
        </LinkButton>
        <LinkButton variant="nav-item" href="/networks">
          Networks
        </LinkButton>
        <LinkButton variant="nav-item" href="/finance">
          Finance
        </LinkButton>
      </Box>
      <Box>
        <SearchBox />
      </Box>
    </div>
  );
};

export default Masthead;
