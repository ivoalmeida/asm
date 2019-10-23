import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';
import { LinkButton } from '../../components/atoms/button';
import Logo from '../../components/atoms/logo';
import Box from '../../components/atoms/box';

const NotFount: React.FC = () => {
  return (
    <div className={cn(styles.overlay)}>
      <div className={cn(styles.content)}>
        <Box direction="column" justifyContent="center" margin="30px 5px" alignItems="center">
          <Logo className={styles.logo} />
          <h1 className={cn(styles.notfound, styles.notfound404)}>404</h1>
          <h3>Oops! This Page Could Not Be Found</h3>
          <p className={styles.infoText}>
            Sorry but the page you are looking for does not exist, have been removed. name changed
            or is temporarily unavailable
          </p>
          <LinkButton variant="primary" size="large" href="/">
            Go to homepage
          </LinkButton>
        </Box>
      </div>
    </div>
  );
};

export default NotFount;
