import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Label from '.';
import InputText from '../input';
import Box from '../box';

storiesOf('Label', module)
  .addDecorator(withKnobs)
  .add('Label', () => <Label>This is a label</Label>)
  .add('Label with InputText', () => (
    <>
      <Label htmlFor="input1">This is a label</Label>
      <InputText placeholder="Testing label" id="input1" />
    </>
  ));
