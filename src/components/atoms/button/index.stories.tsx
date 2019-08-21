import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from '.';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary button', () => (
    <Button variant={text('variant', 'primary')}>I am a primary button</Button>
  ))
  .add('Default button', () => <Button variant="default">I am a default button</Button>);
