import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button, { LinkButton } from '.';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default button', () => (
    <>
      <Button variant={text('variant', 'default')} size="large">
        Default button
      </Button>
      {'   '}
      <Button variant={text('variant', 'default')} size="medium">
        Default button
      </Button>
      {'   '}
      <Button variant={text('variant', 'default')} size="small">
        Default button
      </Button>
    </>
  ))
  .add('Primary button', () => (
    <>
      <Button variant={text('variant', 'primary')} size="large">
        Primary button
      </Button>
      {'   '}
      <Button variant={text('variant', 'primary')} size="medium">
        Primary button
      </Button>
      {'   '}
      <Button variant={text('variant', 'primary')} size="small">
        Primary button
      </Button>
    </>
  ))
  .add('Secondary button', () => (
    <>
      <Button variant={text('variant', 'secondary')} size="large">
        Secondary button
      </Button>
      {'   '}
      <Button variant={text('variant', 'secondary')} size="medium">
        Secondary button
      </Button>
      {'   '}
      <Button variant={text('variant', 'secondary')} size="small">
        Secondary button
      </Button>
    </>
  ))
  .add('Danger button', () => (
    <>
      <Button variant={text('variant', 'danger')} size="large">
        Danger button
      </Button>
      {'   '}
      <Button variant={text('variant', 'danger')} size="medium">
        Danger button
      </Button>
      {'   '}
      <Button variant={text('variant', 'danger')} size="small">
        Danger button
      </Button>
    </>
  ))
  .add('Success button', () => (
    <>
      <Button variant={text('variant', 'success')} size="large">
        Success button
      </Button>
      {'   '}
      <Button variant={text('variant', 'success')} size="medium">
        Success button
      </Button>
      {'   '}
      <Button variant={text('variant', 'success')} size="small">
        Success button
      </Button>
    </>
  ))
  .add('Link button', () => (
    <>
      <LinkButton variant={text('variant', 'success')} size="large">
        Success button
      </LinkButton>
      {'   '}
      <LinkButton variant={text('variant', 'success')} size="medium">
        Success button
      </LinkButton>
      {'   '}
      <LinkButton variant={text('variant', 'success')} size="small">
        Success button
      </LinkButton>
    </>
  ));
