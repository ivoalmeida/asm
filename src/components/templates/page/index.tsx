import * as React from 'react';

import Box from '../../atoms/box';
import Block from '../../atoms/block';
import Masthead from '../../organisms/masthead';

interface IProps {
  children: any;
}

const PageTemplate: React.FC<IProps> = ({ children }) => {
  const childrenAr = React.Children.toArray(children);
  return (
    <Box
      direction="column"
      styles={{
        justifyContent: 'space-around',
        justifyItems: 'flex-start',
      }}
    >
      <Masthead />

      {childrenAr.map((item, index) => {
        if (index === 0) {
          return <Block>{item}</Block>;
        }
        return <React.Fragment key={index}>{item}</React.Fragment>;
      })}
    </Box>
  );
};

export default PageTemplate;
