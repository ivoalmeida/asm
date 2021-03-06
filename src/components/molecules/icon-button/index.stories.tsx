import { storiesOf } from '@storybook/react';
import * as React from 'react';
import IconButton from '.';

storiesOf('IconButton', module)
  .add('Filter', () => (
    <IconButton variant="default" icon="filter" size="medium">
      Filter
    </IconButton>
  ))
  .add('Table Content', () => (
    <IconButton variant="default" icon="eye" size="medium">
      Table Content
    </IconButton>
  ))
  .add('Create New', () => (
    <IconButton variant="secondary" icon="plus" size="medium">
      Create New
    </IconButton>
  ))
  .add('Delete', () => (
    <IconButton variant="danger" icon="trash" size="medium">
      Delete
    </IconButton>
  ))
  .add('Icon only', () => <IconButton variant="danger" icon="actions" size="medium" />);
