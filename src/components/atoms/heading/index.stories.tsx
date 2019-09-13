import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

storiesOf('Heading', module)
  .addDecorator(withKnobs)
  .add('Heading', () => (
    <div>
      <h1>Heading1</h1>
      <h2>Heading2</h2>
      <h3>Heading3</h3>
      <h4>Heading4</h4>
      <h5>Heading5</h5>
      <h6>Heading6</h6>
    </div>
  ));
