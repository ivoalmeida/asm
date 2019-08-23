import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Icon from '.';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('Actions Icon', () => <Icon variant={text('variant', 'actions')} />)
  .add('Trash Icon', () => <Icon variant={text('variant', 'trash')} />);
