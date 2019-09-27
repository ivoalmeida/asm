import * as React from 'react';
import { shallow } from 'enzyme';

import ForgotPassword from '.';

describe('ForgetPassword tests', () => {
  const wrapper = shallow(<ForgotPassword />);

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the heading', () => {
    const result = wrapper.contains('Forgot Password');
    expect(result).toBeTruthy();
  });
});
