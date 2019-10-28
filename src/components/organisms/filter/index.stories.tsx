import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ISelectItem } from '../../atoms/dropdown';
import Filter, { IFilter } from '.';

const application: IFilter = {
  label: 'Application',
  options: [
    {
      label: 'All',
      value: -1,
      default: true,
    },
    {
      label: 'Connector',
      value: 1,
    },
    {
      label: 'Mediation',
      value: 2,
    },
  ],
};

const targetGeo: IFilter = {
  label: 'Target Geo',
  options: [
    {
      label: 'All',
      value: -1,
      default: true,
    },
    {
      label: 'Europe',
      value: 2,
    },
  ],
};

const adaptor: IFilter = {
  label: 'Adapter',
  options: [
    {
      label: 'All',
      value: -1,
      default: true,
    },
    {
      label: 'App Nexus',
      value: 1,
    },
    {
      label: 'Google Ads',
      value: 2,
    },
  ],
};

const filters = [application, targetGeo, adaptor];

storiesOf('Filter', module).add('Filter', () => (
  <Filter
    filters={filters}
    onChange={action('onChange')}
    onFilter={action('onFilter')}
    onCancel={action('onCancel')}
  />
));
