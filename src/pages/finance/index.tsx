import * as React from 'react';

import PageTemplate from '../../components/templates/page';
import Box from '../../components/atoms/box';

const FinancePage: React.FC = () => {
  return (
    <PageTemplate>
      <Box>
        <h1>Finance</h1>
      </Box>
      <Box padding="20px 0" width="100vw" justifyContent="flex-end">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, in, cupiditate,
          perspiciatis facilis alias vero doloremque odit eum praesentium natus maiores! Quo natus
          molestias nobis voluptatum. Ad facere vero at.
        </p>
      </Box>
    </PageTemplate>
  );
};

export default FinancePage;
