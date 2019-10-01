import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Label from '../../atoms/label';
import Box from '../../atoms/box';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import Dropdown from '../../atoms/dropdown';
import SearchBox from '../../molecules/search-box';
import Field from '../../molecules/field';
import Form from '.';

storiesOf('Form', module).add('form', () => (
  <Box height="600px">
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
      <Field name="first_name" label="First Name" placeholder="John" />
      <Field name="last_name" label="Last Name" placeholder="Doe" />
      <Field name="email" label="E-mail Address" placeholder="example: john.doe@gmail.com" />
      <Field
        name="role"
        label="User Role"
        type="dropdown"
        options={[
          { label: 'Admin', value: 1 },
          { label: 'God', value: 2 },
          { label: 'Basic', value: 3, default: true },
        ]}
      />
    </Form>
  </Box>
));
