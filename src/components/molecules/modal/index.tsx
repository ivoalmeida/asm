import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';
import ApplicationRootPortal from '../../atoms/application-root-portal';
import Icon from '../../atoms/icon';

interface IProps {
  children?: any;
  showCloseButton?: boolean;
  className?: string;
  onClose?: () => void;
}

const Modal: React.FC<IProps> = ({ children, showCloseButton = false, className, onClose }) => {
  return (
    <ApplicationRootPortal>
      <div className={styles.modalOverlay}>
        <div className={cn(styles.modalOverlayContent, className)}>
          {showCloseButton ? (
            <div className={styles.closeButton} onClick={onClose}>
              <Icon variant="times" />
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </ApplicationRootPortal>
  );
};

export default Modal;
