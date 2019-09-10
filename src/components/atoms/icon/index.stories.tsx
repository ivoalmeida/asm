import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Icon from '.';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
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
