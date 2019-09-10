import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Badge from '.';

storiesOf('Badge', module)
  .add('Badge default', () => <Badge>I am a badge</Badge>)
  .add('Badge primary', () => <Badge variant="primary">I am a badge</Badge>)
  .add('Badge secondary', () => <Badge variant="secondary">I am a badge</Badge>)
  .add('Badge success', () => <Badge variant="success">I am a badge</Badge>)
  .add('Badge danger', () => <Badge variant="danger">I am a badge</Badge>)
  .add('Badge warning', () => <Badge variant="warning">I am a badge</Badge>);
