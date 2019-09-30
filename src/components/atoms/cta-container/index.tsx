import * as React from 'react';

import * as styles from './styles.scss';

interface IProps {
  children: any;
}

const CtaContainer: React.FC<IProps> = ({ children }) => {
  return <div className={styles.cta}>{children}</div>;
};

export default CtaContainer;
