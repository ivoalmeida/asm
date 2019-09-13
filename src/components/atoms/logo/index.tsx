import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';

const Logo = () => <div className={cn(styles.logo, styles.text)}>venatus</div>;

export const LogoMastHead = () => (
  <div className={cn(styles.logo, styles.text, styles.masthead)}>v</div>
);

export default Logo;
