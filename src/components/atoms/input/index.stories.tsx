import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import InputText from '.';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Input text', () => <InputText placeholder={text('placeholder', 'I am a placeholder...')} />)
  .add('Input text error', () => (
    <InputText
      placeholder={text('placeholder', 'I am a placeholder...')}
      errorMessage={text('errorMessage', 'I am an error message...')}
    />
  ));
