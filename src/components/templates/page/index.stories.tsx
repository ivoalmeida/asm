import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import PageTemplate from '.';
import Box from '../../atoms/box';
import Block from '../../atoms/block';

storiesOf('PageTemplate', module)
  .addDecorator(withKnobs)
  .add('PageTemplate', () => (
    <PageTemplate>
      <Block>
        <h1>Accounts</h1>
      </Block>
      <Box>Data Grid</Box>
    </PageTemplate>
  ));
