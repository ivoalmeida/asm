import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';

interface IProps {
  className?: string;
}

const Logo: React.FC<IProps> = ({ className }) => (
  <div className={cn(styles.logo, styles.text, className)}>venatus</div>
);

export const LogoMastHead: React.FC<IProps> = ({ className }) => (
  <div className={cn(styles.logo, styles.text, styles.masthead, className)}>v</div>
);

export default Logo;
