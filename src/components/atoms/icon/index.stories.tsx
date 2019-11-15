import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Box from '../box';
import Icon from '.';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('user1', () => <Icon variant="user1" />)
  .add('user2', () => <Icon variant="user2" />)
  .add('user3', () => <Icon variant="user3" />)
  .add('user4', () => <Icon variant="user4" />)
  .add('search', () => <Icon variant="search" />)
  .add('actions', () => <Icon variant="actions" />)
  .add('trash', () => <Icon variant="trash" />)
  .add('changelog', () => <Icon variant="changelog" />)
  .add('cog', () => <Icon variant="cog" />)
  .add('disabled', () => <Icon variant="disabled" />)
  .add('drag', () => <Icon variant="drag" />)
  .add('duplicate', () => <Icon variant="duplicate" />)
  .add('edit', () => <Icon variant="edit" />)
  .add('eye', () => <Icon variant="eye" />)
  .add('filter', () => <Icon variant="filter" />)
  .add('filter2', () => <Icon variant="filter2" />)
  .add('leftArrow', () => <Icon variant="leftArrow" />)
  .add('plus', () => <Icon variant="plus" />)
  .add('rightArrow', () => <Icon variant="rightArrow" />)
  .add('tag', () => <Icon variant="tag" />)
  .add('times', () => <Icon variant="times" />);
