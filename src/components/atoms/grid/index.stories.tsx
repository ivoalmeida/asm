import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Grid from '.';
import Box from '../box';

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('Grid with text', () => (
    <Grid>
      <Box>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio ut culpa
          dolorum quibusdam, deserunt mollitia. Recusandae atque nulla libero facilis maxime dolorem
          tenetur natus, perspiciatis, necessitatibus, aliquam corporis? Facilis!
        </p>
      </Box>
      <Box>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio ut culpa
          dolorum quibusdam, deserunt mollitia. Recusandae atque nulla libero facilis maxime dolorem
          tenetur natus, perspiciatis, necessitatibus, aliquam corporis? Facilis!
        </p>
      </Box>
    </Grid>
  ));
