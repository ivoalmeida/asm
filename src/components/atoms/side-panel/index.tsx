import * as React from 'react';
import cn from 'classnames';

import ApplicationRootPortal from '../application-root-portal';
import * as styles from './styles.scss';

interface IProps {
  children: any;
  isVisible: boolean;
  onClose?: () => void;
}

const SidePanel: React.FC<IProps> = ({ children, isVisible, onClose }) => {
  return (
    <ApplicationRootPortal>
      <div className={cn(styles.sidePanel, styles.overlay, { [styles.show]: isVisible })} />
      <div className={cn(styles.sidePanel, styles.content, { [styles.show]: isVisible })}>
        <div className={cn(styles.innerContent)}>{children}</div>
      </div>
    </ApplicationRootPortal>
  );
};

export default SidePanel;
