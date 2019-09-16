import * as React from 'react';
import { shallow } from 'enzyme';
import Logo from '.';

describe('Logo tests', () => {
  const wrapper = shallow(<Logo />);

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders venatus', () => {
    const result = wrapper.contains('venatus');
    expect(result).toBeTruthy();
  });
});
