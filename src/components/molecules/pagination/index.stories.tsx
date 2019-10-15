import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Pagination from '.';

storiesOf('Pagination', module)
  .add('Pagination current page is 1', () => (
    <Pagination initialPage={1} pageSize={10} recordCount={120} onPageNext={() => 1 === 1} />
  ))
  .add('Pagination current page is 5', () => (
    <Pagination initialPage={5} pageSize={10} recordCount={120} onPageNext={() => 1 === 1} />
  ))
  .add('Pagination current page is last', () => (
    <Pagination initialPage={12} pageSize={10} recordCount={120} onPageNext={() => 1 === 1} />
  ));
