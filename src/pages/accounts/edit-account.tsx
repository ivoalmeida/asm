import * as React from 'react';

import SidePanel from '../../components/atoms/side-panel';
import Form from '../../components/organisms/form';
import Field from '../../components/molecules/field';
import Button from '../../components/atoms/button';

interface IProps {
  isOpen: boolean;
  onCancel: () => void;
}

const EditAccount: React.FC<IProps> = ({ isOpen, onCancel }) => {
  return (
    <SidePanel isVisible={isOpen} onClose={onCancel}>
      <Form
        title="Create New Account"
        buttons={
          <>
            <Button variant="default" size="small" onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="primary" size="small" type="submit">
              Create New Account
            </Button>
          </>
        }
      >
        <Field name="account_name" label="Account Name" />
        <Field name="company_name" label="Company Name" />
        <Field name="address_line1" label="Address Line 1" />
        <Field name="address_line2" label="Address Line 2" />
        <Field
          name="country"
          label="Country"
          type="dropdown"
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
          options={[
            { label: 'Lisbon', value: 1 },
            { label: 'Madeira', value: 2 },
            { label: 'Porto', value: 3, default: true },
          ]}
        />
        <Field
          name="city"
          label="city"
          type="dropdown"
          options={[
            { label: 'Vila Nova de Gaia', value: 1 },
            { label: 'Porto', value: 2 },
            { label: 'Matosinhos', value: 3, default: true },
          ]}
        />
        <Field name="post_code" label="Post Code" />
        <hr style={{ gridColumn: '1 / span 2' }} />
        <span style={{ gridColumn: '1 / span 2' }}>
          <Field name="comments" label="Comments" type="textarea" style={{ height: '180px' }} />
        </span>
        <Field
          name="account_manager"
          label="AccountManager"
          type="dropdown"
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
