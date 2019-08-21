import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from '.';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default button', () => <Button variant={text('variant', 'default')}>Default button</Button>)
  .add('Primary button', () => <Button variant={text('variant', 'primary')}>Primary button</Button>)
  .add('Secondary button', () => (
    <Button variant={text('variant', 'secondary')}>Secondary button</Button>
  ))
  .add('Danger button', () => <Button variant={text('variant', 'danger')}>Danger button</Button>)
  .add('Success button', () => (
    <Button variant={text('variant', 'success')}>Success button</Button>
  ));
