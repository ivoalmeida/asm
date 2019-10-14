import * as React from 'react';
import { shallow } from 'enzyme';
import ToggleRadio from '.';

describe('ToggleRadio tests', () => {
  const wrapper = shallow(<ToggleRadio name="test" />);

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
