import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Box from '.';
import Button from '../button';

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .add('Box row', () => (
    <Box>
      <div style={{ backgroundColor: `#98D2EB` }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ullam quos voluptas molestias
        corporis aperiam a dignissimos aut natus ducimus iste voluptatibus fuga saepe, nesciunt
        distinctio, sed placeat dolores. Autem.
      </div>
      <div style={{ backgroundColor: `#D8315B` }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ullam quos voluptas molestias
        corporis aperiam a dignissimos aut natus ducimus iste voluptatibus fuga saepe, nesciunt
        distinctio, sed placeat dolores. Autem.
      </div>
    </Box>
  ))
  .add('Box column', () => (
    <Box direction="column">
      <div style={{ backgroundColor: `#78FECF` }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ullam quos voluptas molestias
        corporis aperiam a dignissimos aut natus ducimus iste voluptatibus fuga saepe, nesciunt
        distinctio, sed placeat dolores. Autem.
      </div>
      <div style={{ backgroundColor: `#7F96FF` }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ullam quos voluptas molestias
        corporis aperiam a dignissimos aut natus ducimus iste voluptatibus fuga saepe, nesciunt
        distinctio, sed placeat dolores. Autem.
      </div>
    </Box>
  ))
  .add('Box buttons', () => (
    <Box
      direction="column"
      w={500}
      h={250}
      styles={{ border: `1px solid #f3f3f3`, justifyContent: `flex-end` }}
    >
      <Button variant="primary" size="large">
        Login
      </Button>
      <Button variant="default" size="large">
        Resend verification code
      </Button>
    </Box>
  ));
