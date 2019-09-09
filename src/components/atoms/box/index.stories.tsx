import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Box from '.';

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .add('Box with text', () => (
    <Box>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ullam quos voluptas molestias
      corporis aperiam a dignissimos aut natus ducimus iste voluptatibus fuga saepe, nesciunt
      distinctio, sed placeat dolores. Autem.
    </Box>
  ))
  .add('Box with text and title', () => (
    <Box>
      <h1>Ducimus Iste Voluptatibus</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ullam quos voluptas molestias
        corporis aperiam a dignissimos aut natus fuga saepe, nesciunt distinctio, sed placeat
        dolores. Autem.
      </p>
    </Box>
  ));
