import * as React from 'react';
import { shallow } from 'enzyme';
import Field from '.';

describe('Spinner tests', () => {
  const wrapper = shallow(<Field name="test" />);

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
