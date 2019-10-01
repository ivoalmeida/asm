import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Field from '.';

storiesOf('Field', module)
  .add('default', () => <Field name="field" />)
  .add('with label', () => <Field name="field" label="Label" />)
  .add('with label and placeholder', () => (
    <Field name="field" label="Label" placeholder="type field name" />
  ))
  .add('invalid', () => <Field name="field" label="Label" invalid />)
  .add('invalid with error message', () => (
    <Field name="field" label="Label" errorMessage="Invalid" invalid />
  ))
  .add('type textarea', () => <Field name="field" label="Label" type="textarea" />)
  .add('type select', () => <Field name="field" label="Label" type="select" />)
  .add('type checkbox', () => <Field name="field" label="Label" type="checkbox" />)
  .add('type radio', () => <Field name="field" label="Label" type="radio" />)
  .add('type radio invalid with error message', () => (
    <Field name="field" label="Label" type="radio" errorMessage="Invalid" invalid />
  ));
