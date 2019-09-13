import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import LoginPage from '.';

storiesOf('LoginPage', module)
  .addDecorator(withKnobs)
  .add('LoginPage', () => <LoginPage />);
