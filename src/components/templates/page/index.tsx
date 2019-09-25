import * as React from 'react';

import * as styles from './styles.scss';
import Box from '../../atoms/box';
import Block from '../../atoms/block';
import Masthead from '../../organisms/masthead';

interface IProps {
  children: any;
}

const PageTemplate: React.FC<IProps> = ({ children }) => {
  const childrenAr = React.Children.toArray(children);
  return (
    <div className={styles.container}>
      <div className={styles.masthead}>
        <Masthead />
      </div>

      {childrenAr.map((item, index) => {
        if (index === 0) {
          return (
            <div key={index} className={styles.sectionHeader}>
              <div className={styles.block}>{item}</div>
            </div>
          );
        }
        return (
          <div className={styles.content} key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default PageTemplate;
