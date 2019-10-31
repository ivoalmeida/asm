import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';
import ApplicationRootPortal from '../../atoms/application-root-portal';
import Icon from '../../atoms/icon';

interface IProps {
  children?: any;
  className?: string;
  onClose?: () => void;
}

const Modal: React.FC<IProps> = ({ children, className, onClose }) => {
  return (
    <ApplicationRootPortal>
      <div className={styles.modalOverlay}>
        <div className={cn(styles.modalOverlayContent, className)}>
          <div className={styles.closeButton} onClick={onClose}>
            <Icon variant="times" />
          </div>
          {children}
        </div>
      </div>
    </ApplicationRootPortal>
  );
};

export default Modal;
