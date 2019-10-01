import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Field from '.';

storiesOf('Field', module)
  .add('default', () => <Field name="field" />)
  .add('with label', () => <Field name="field" label="Label" />)
  .add('with align block', () => <Field name="field" label="Label" align="block" />)
  .add('with align inline', () => <Field name="field" label="Label" align="inline" />)
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
