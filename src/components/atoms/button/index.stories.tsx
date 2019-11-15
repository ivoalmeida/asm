import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button, { LinkButton } from '.';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default button', () => (
    <Button variant="default" size="medium">
      Default button
    </Button>
  ))
  .add('Primary button', () => (
    <Button variant="primary" size="medium">
      Primary button
    </Button>
  ))
  .add('Secondary button', () => (
    <Button variant="secondary" size="medium">
      Secondary button
    </Button>
  ))
  .add('Danger button', () => (
    <Button variant="danger" size="medium">
      Danger button
    </Button>
  ))
  .add('Success button', () => (
    <Button variant="success" size="medium">
      Success button
    </Button>
  ))
  .add('Link button', () => (
    <LinkButton variant="default" size="medium" href="#">
      Success button
    </LinkButton>
  ));
