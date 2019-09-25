import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import PageTemplate from '.';
import Box from '../../atoms/box';
import Block from '../../atoms/block';

storiesOf('PageTemplate', module)
  .addDecorator(withKnobs)
  .add('PageTemplate', () => (
    <PageTemplate>
      <Block>
        <h1>Lorem Ipsum</h1>
      </Block>
      <Box direction="column">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ut ullam aut ratione
          impedit quisquam, suscipit et facilis aliquam at id quo molestias ex cum odio, ad harum
          sapiente iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. A placeat quis
          dignissimos veritatis laudantium? Et, earum nam. Mollitia, repudiandae! Modi beatae
          tempore perspiciatis, maiores voluptatum quis doloremque hic atque quasi.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ut ullam aut ratione
          impedit quisquam, suscipit et facilis aliquam at id quo molestias ex cum odio, ad harum
          sapiente iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. A placeat quis
          dignissimos veritatis laudantium? Et, earum nam. Mollitia, repudiandae! Modi beatae
          tempore perspiciatis, maiores voluptatum quis doloremque hic atque quasi.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ut ullam aut ratione
          impedit quisquam, suscipit et facilis aliquam at id quo molestias ex cum odio, ad harum
          sapiente iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. A placeat quis
          dignissimos veritatis laudantium? Et, earum nam. Mollitia, repudiandae! Modi beatae
          tempore perspiciatis, maiores voluptatum quis doloremque hic atque quasi.
        </p>
      </Box>
    </PageTemplate>
  ));
