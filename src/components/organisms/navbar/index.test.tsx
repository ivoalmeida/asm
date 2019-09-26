import * as React from 'react';
import { shallow } from 'enzyme';
import NavBar from '.';

describe('NavBar tests', () => {
  const wrapper = shallow(
    <NavBar>
      <a>Link</a>
    </NavBar>,
  );

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
