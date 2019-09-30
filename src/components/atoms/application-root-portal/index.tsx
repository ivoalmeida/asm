import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IProps {
  children: any;
}

const ApplicationRootPortal: React.FC<IProps> = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById('root'));
};

export default ApplicationRootPortal;
