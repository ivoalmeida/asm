import * as React from 'react';
import { shallow } from 'enzyme';
import Filter from '.';

describe('Filter tests', () => {
  const wrapper = shallow(<Filter filters={[]} />);

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
