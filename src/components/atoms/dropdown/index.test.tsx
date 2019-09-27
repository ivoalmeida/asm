import * as React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '.';

describe('Dropdown tests', () => {
  const wrapper = shallow(
    <Dropdown
      options={[
        { label: 'Option 1', value: 22 },
        { label: 'Option 2', value: 33 },
        { label: 'Option 3', value: 44 },
        { label: 'Option 4', value: 55 },
        { label: 'Option 5', value: 66 },
      ]}
    />,
  );

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
