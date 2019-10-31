import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../../atoms/button';
import IconButton from '../../molecules/icon-button';
import Box from '../../atoms/box';
import CtaContainer from '../../atoms/cta-container';
import Modal from '.';

storiesOf('Modal', module)
  .add('Modal no close button', () => (
    <Modal>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis distinctio perferendis
        tempore. Porro nobis placeat aspernatur recusandae, saepe, natus provident vero illum iusto
        minus ad dolor explicabo. Illum, architecto quis?
      </p>
    </Modal>
  ))
  .add('Modal show close button', () => (
    <Modal showCloseButton>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis distinctio perferendis
        tempore. Porro nobis placeat aspernatur recusandae, saepe, natus provident vero illum iusto
        minus ad dolor explicabo. Illum, architecto quis?
      </p>
    </Modal>
  ))
  .add('Modal dialog box', () => (
    <Modal>
      <Box direction="column">
        <h4>Are you sure you want to delete this partner?</h4>
        <p>You'll delete all the rules linked to this partner for all the sites</p>
        <CtaContainer align="left">
          <Button variant="default" size="medium">
            Cancel
          </Button>
          <IconButton variant="danger" icon="trash" size="medium">
            Delete
          </IconButton>
        </CtaContainer>
      </Box>
    </Modal>
  ));
