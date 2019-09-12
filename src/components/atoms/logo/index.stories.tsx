import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Logo, { LogoMastHead } from '.';

storiesOf('Logo', module)
  .addDecorator(withKnobs)
  .add('Logo Masthead', () => <LogoMastHead />)
  .add('Logo', () => <Logo width={number('witdh', 158)} height={number('height', 82)} />);
