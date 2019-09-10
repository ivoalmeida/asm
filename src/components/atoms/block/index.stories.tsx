import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Block from '.';

storiesOf('Block', module)
  .add('Block with text', () => (
    <Block>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit exercitationem
        voluptatibus velit amet voluptatum, provident quidem laborum odio modi corrupti quo, porro
        omnis, nam inventore iusto ipsam debitis quaerat?
      </p>
    </Block>
  ))
  .add('Block with text and title', () => (
    <Block>
      <h1>Provident Quidem </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit exercitationem
        voluptatibus velit amet voluptatum, provident quidem laborum odio modi corrupti quo, porro
        omnis, nam inventore iusto ipsam debitis quaerat?
      </p>
    </Block>
  ));
