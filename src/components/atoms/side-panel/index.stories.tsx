import * as React from 'react';
import { storiesOf } from '@storybook/react';

import SidePanel from '.';
import Button from '../button';
import Box from '../box';
import Label from '../label';
import Input from '../input';
import SearchBox from '../../molecules/search-box';

storiesOf('Side Panel', module)
  .add('Side Panel with text', () => {
    const [isOpen, toggleSidePanel] = React.useState<boolean>(false);
    return (
      <>
        <Button variant="default" size="large" onClick={() => toggleSidePanel(!isOpen)}>
          Open side panel
        </Button>
        <SidePanel isVisible={isOpen} onClose={() => toggleSidePanel(!isOpen)}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi cum dolorem quis.
            Accusamus nemo, labore ullam ipsa temporibus quasi exercitationem minus officia impedit
            nihil dolor, dolore magni dignissimos maiores rem.
          </p>
        </SidePanel>
      </>
    );
  })
  .add('Side Panel with form', () => {
    const [isOpen, toggleSidePanel] = React.useState<boolean>(false);
    return (
      <>
        <Button variant="default" size="large" onClick={() => toggleSidePanel(!isOpen)}>
          Open side panel
        </Button>
        <SidePanel isVisible={isOpen} onClose={() => toggleSidePanel(!isOpen)}>
          <Box direction="column" padding="25px 20px">
            <h4>Create New Users</h4>
            <hr />
            <SearchBox placeholder="Search on accounts" width={'100%'} />
            <Box direction="row">
              <Label>
                First Name
                <Input type="text" placeholder="i.e. John" />
              </Label>
              <Label>
                Last Name
                <Input type="text" placeholder="i.e. Doe" />
              </Label>
            </Box>
            <Box direction="row">
              <Button
                variant="default"
                size="medium"
                onClick={() => toggleSidePanel(!isOpen)}
                style={{ flex: '1 1', marginRight: '10px' }}
              >
                Cancel
              </Button>
              <Button variant="primary" size="medium" style={{ flex: '1 1' }}>
                Submit
              </Button>
            </Box>
          </Box>
        </SidePanel>
      </>
    );
  });
