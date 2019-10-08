import * as React from 'react';
import { shallow } from 'enzyme';
import ToggleButton from '.';

describe('ToggleButton tests', () => {
  const wrapper = shallow(
    <ToggleButton items={[{ label: 'Active', value: 1 }, { label: 'Inactive', value: 0 }]} />,
  );

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
