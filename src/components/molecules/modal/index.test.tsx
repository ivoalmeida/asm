import * as React from 'react';
import { shallow } from 'enzyme';
import Modal from '.';

describe('Modal tests', () => {
  const wrapper = shallow(<Modal />);

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
