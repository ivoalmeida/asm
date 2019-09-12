import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Masthead from '.';

storiesOf('Masthead', module)
  .addDecorator(withKnobs)
  .add('Masthead', () => <Masthead />);
