import * as React from 'react';

import MockServer from '../../containers/mock-server';
import Routes from '../../routes';

const App = () => {
  return (
    <MockServer>
      <Routes />
    </MockServer>
  );
};

export default App;
