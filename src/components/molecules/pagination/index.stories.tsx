import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Pagination from '.';

storiesOf('Pagination', module).add('Pagination', () => (
  <Pagination pageLimit={30} onPageChanged={action('onPageChanged')} totalRecords={100} />
));
