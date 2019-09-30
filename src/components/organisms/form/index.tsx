import * as React from 'react';

import * as styles from './styles.scss';

interface IProps {
  title: string;
  children?: any;
}

const Form: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className={styles.form}>
      <h6>{title}</h6>
      <hr />
      {children}
    </div>
  );
};

export default Form;
