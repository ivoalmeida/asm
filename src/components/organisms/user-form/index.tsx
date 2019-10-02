import * as React from 'react';
import Form from '../form';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import Label from '../../atoms/label';
import Field from '../../molecules/field';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  role: 1;
}

interface IProps {
  onSubmit?: () => void;
  onCancel?: () => void;
  user?: IUser;
}

const UserForm: React.FC<IProps> = ({ onCancel, onSubmit, user }) => {
  const [currentUser, setUser] = React.useState<IUser>(
    user || { firstName: '', lastName: '', email: '', role: 1 },
  );
  return (
    <Form
      title="Create New Users"
      buttons={
        <>
          <Button variant="default" size="medium" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" size="medium" onClick={onSubmit}>
            Submit
          </Button>
        </>
      }
    >
      <Field
        name="first_name"
        label="First Name"
        placeholder="John"
        value={(currentUser && currentUser.firstName) || ''}
        // onChange={e => setUser(Object.assign({},user, {firstName: e.target.value})))}
      />
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
  );
};

export default UserForm;
