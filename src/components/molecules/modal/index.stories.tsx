import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from '.';

storiesOf('Modal', module).add('Modal', () => (
  <Modal>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis distinctio perferendis
      tempore. Porro nobis placeat aspernatur recusandae, saepe, natus provident vero illum iusto
      minus ad dolor explicabo. Illum, architecto quis?
    </p>
  </Modal>
));
