import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button, { LinkButton } from '.';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default button', () => (
    <Button variant={text('variant', 'default')} size={text('size', 'medium')}>
      Default button
    </Button>
  ))
  .add('Primary button', () => (
    <Button variant={text('variant', 'primary')} size={text('size', 'medium')}>
      Primary button
    </Button>
  ))
  .add('Secondary button', () => (
    <Button variant={text('variant', 'secondary')} size={text('size', 'medium')}>
      Secondary button
    </Button>
  ))
  .add('Danger button', () => (
    <Button variant={text('variant', 'danger')} size={text('size', 'medium')}>
      Danger button
    </Button>
  ))
  .add('Success button', () => (
    <Button variant={text('variant', 'success')} size={text('size', 'medium')}>
      Success button
    </Button>
  ))
  .add('Link button', () => (
    <LinkButton variant={text('variant', 'default')} size={text('size', 'medium')} href="#">
      Success button
    </LinkButton>
  ));
