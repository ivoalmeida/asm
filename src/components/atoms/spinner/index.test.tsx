import * as React from 'react';
import { shallow } from 'enzyme';
import Spinner from '.';

describe('Spinner tests', () => {
  const wrapper = shallow(<Spinner />);

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
