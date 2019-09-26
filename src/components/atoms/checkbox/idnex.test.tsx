import * as React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '.';

describe('Checkbox tests', () => {
  const wrapper = shallow(<Checkbox />);

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
