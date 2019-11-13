import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Box from '../box';
import Icon from '.';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('users', () => (
    <Box direction="column" padding="10px">
      <Box alignItems="center" padding="0 20px">
        <h5 style={{ marginBottom: 0 }}>User icon variantions</h5>
      </Box>
      <Box alignItems="center" padding="5px">
        <Box direction="column" alignItems="center" padding="5px">
          <span style={{ fontSize: '0.6rem', color: '#000', padding: '10px' }}>user1</span>
          <Icon variant="user1" />
        </Box>
        <Box direction="column" alignItems="center" padding="5px">
          <span style={{ fontSize: '0.6rem', color: '#000', padding: '10px' }}>user2</span>
          <Icon variant="user2" />
        </Box>
        <Box direction="column" alignItems="center" padding="5px">
          <span style={{ fontSize: '0.6rem', color: '#000', padding: '10px' }}>user3</span>
          <Icon variant="user3" />
        </Box>
        <Box direction="column" alignItems="center" padding="5px">
          <span style={{ fontSize: '0.6rem', color: '#000', padding: '10px' }}>user4</span>
          <Icon variant="user4" />
        </Box>
      </Box>
    </Box>
  ))
  .add('search', () => <Icon variant={text('variant', 'search')} />)
  .add('actions', () => <Icon variant={text('variant', 'actions')} />)
  .add('trash', () => <Icon variant={text('variant', 'trash')} />)
  .add('changelog', () => <Icon variant={text('variant', 'changelog')} />)
  .add('cog', () => <Icon variant={text('variant', 'cog')} />)
  .add('disabled', () => <Icon variant={text('variant', 'disabled')} />)
  .add('drag', () => <Icon variant={text('variant', 'drag')} />)
  .add('duplicate', () => <Icon variant={text('variant', 'duplicate')} />)
  .add('edit', () => <Icon variant={text('variant', 'edit')} />)
  .add('eye', () => <Icon variant={text('variant', 'eye')} />)
  .add('filter', () => <Icon variant={text('variant', 'filter')} />)
  .add('filter2', () => <Icon variant={text('variant', 'filter2')} />)
  .add('leftArrow', () => <Icon variant={text('variant', 'leftArrow')} />)
  .add('plus', () => <Icon variant={text('variant', 'plus')} />)
  .add('rightArrow', () => <Icon variant={text('variant', 'rightArrow')} />)
  .add('tag', () => <Icon variant={text('variant', 'tag')} />)
  .add('times', () => <Icon variant={text('variant', 'times')} />);
