import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Logo, { LogoMastHead } from '.';

storiesOf('Logo', module)
  .add('Logo Masthead', () => <LogoMastHead />)
  .add('Logo', () => <Logo />);
