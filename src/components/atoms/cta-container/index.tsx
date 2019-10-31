import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';

interface IProps {
  align: string | 'left|right';
  children: any;
}

const CtaContainer: React.FC<IProps> = ({ children, align }) => {
  return (
    <div
      className={cn(
        styles.cta,
        { [styles.right]: align === 'right' },
        { [styles.left]: align === 'left' },
      )}
    >
      {children}
    </div>
  );
};

export default CtaContainer;
