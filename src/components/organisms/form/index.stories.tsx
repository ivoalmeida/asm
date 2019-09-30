import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Label from '../../atoms/label';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import SearchBox from '../../molecules/search-box';
import Form from '.';

storiesOf('Form', module).add('form', () => (
  <Form
    title="Create New Users"
    buttons={() => (
      <>
        <Button variant="default" size="medium">
          Cancel
        </Button>
        <Button variant="primary" size="medium">
          Submit
        </Button>
      </>
    )}
  >
    <Label>Select Account(s)</Label>
    <SearchBox placeholder="Search on accounts" />
    <hr />
    <Label htmlFor="fname">First Name</Label>
    <Input placeholder="i.e. John" id="fname" />
    <Label>
      Last Name <Input placeholder="i.e. Doe" />
    </Label>
  </Form>
));
