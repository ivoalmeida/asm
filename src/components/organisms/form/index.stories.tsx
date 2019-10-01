import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Label from '../../atoms/label';
import Box from '../../atoms/box';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import Dropdown from '../../atoms/dropdown';
import SearchBox from '../../molecules/search-box';
import Form from '.';

storiesOf('Form', module).add('form', () => (
  <Form
    title="Create New Users"
    buttons={
      <>
        <Button variant="default" size="medium">
          Cancel
        </Button>
        <Button variant="primary" size="medium">
          Submit
        </Button>
      </>
    }
  >
    <Label>
      <span>First Name</span>
      <Input type="text" placeholder="first name" />
    </Label>
    <Label>
      <span>Last Name</span>
      <Input type="text" placeholder="last name" />
    </Label>
    <Label>
      <span>E-mail Address</span>
      <Input type="text" placeholder="email@domain.com" />
    </Label>
    <Dropdown
      label="User Role"
      options={[
        { label: 'Admin', value: 1 },
        { label: 'God', value: 2 },
        { label: 'Basic', value: 3 },
      ]}
    />
  </Form>
));
