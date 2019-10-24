import * as React from 'react';

import SidePanel from '../../components/atoms/side-panel';
import Form from '../../components/organisms/form';
import Field from '../../components/molecules/field';
import Button from '../../components/atoms/button';

interface IProps {
  isOpen: boolean;
  onCancel: () => void;
}

interface IState {
  accountname?: string;
  companyname?: string;
  addressline1?: string;
  addressline2?: string;
  postcode?: string;
  accountmanager?: string;
  country?: number;
  state?: number;
  city?: number;
}

const initialState: IState = {
  accountname: '',
  companyname: '',
  addressline1: '',
  addressline2: '',
  postcode: '',
  accountmanager: '',
  country: -1,
  state: -1,
  city: -1,
};

const EditAccount: React.FC<IProps> = ({ isOpen, onCancel }) => {
  const [state, setState] = React.useState<IState>(initialState);
  const handleChange = ev => {
    const { name, value } = ev.target;
    setState({ ...state, [name]: value });
  };
  return (
    <SidePanel isVisible={isOpen} onClose={onCancel}>
      <Form
        title="Create New Account"
        buttons={
          <>
            <Button variant="default" size="small" type="button" onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="primary" size="small" type="submit">
              Create New Account
            </Button>
          </>
        }
      >
        <Field
          name="accountname"
          label="Account Name"
          value={state.accountname}
          onChange={handleChange}
        />
        <Field
          name="companyname"
          label="Company Name"
          value={state.companyname}
          onChange={handleChange}
        />
        <Field
          name="addressline1"
          label="Address Line 1"
          value={state.addressline1}
          onChange={handleChange}
        />
        <Field
          name="addressline2"
          label="Address Line 2"
          value={state.addressline2}
          onChange={handleChange}
        />
        <Field
          name="country"
          label="Country"
          type="dropdown"
          onChange={handleChange}
          options={[
            { label: 'United Kingdom', value: 1 },
            { label: 'France', value: 2 },
            { label: 'Portugal', value: 3, default: true },
          ]}
        />
        <Field
          name="state"
          label="state"
          type="dropdown"
          onChange={handleChange}
          options={[
            { label: 'Lisbon', value: 1 },
            { label: 'Madeira', value: 2 },
            { label: 'Porto', value: 3, default: true },
          ]}
        />
        <Field
          name="city"
          label="City"
          type="dropdown"
          onChange={handleChange}
          options={[
            { label: 'Vila Nova de Gaia', value: 1 },
            { label: 'Porto', value: 2 },
            { label: 'Matosinhos', value: 3, default: true },
          ]}
        />
        <Field name="postcode" label="Post Code" value={state.postcode} onChange={handleChange} />
        <hr style={{ gridColumn: '1 / span 2' }} />
        <span style={{ gridColumn: '1 / span 2' }}>
          <Field name="comments" label="Comments" type="textarea" style={{ height: '180px' }} />
        </span>
        <Field
          name="accountmanager"
          label="AccountManager"
          type="dropdown"
          onChange={handleChange}
          options={[
            { label: 'Bob', value: 1 },
            { label: 'Beth', value: 2 },
            { label: 'Bill', value: 3, default: true },
          ]}
        />
      </Form>
    </SidePanel>
  );
};

export default EditAccount;
