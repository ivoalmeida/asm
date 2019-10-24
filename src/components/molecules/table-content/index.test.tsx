import * as React from 'react';
import { shallow } from 'enzyme';
import TableContent from '.';

describe('TableContent tests', () => {
  const wrapper = shallow(<TableContent items={[]} handleChange={ev => 1 === 1} />);

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
