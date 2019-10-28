import * as React from 'react';
import { shallow } from 'enzyme';
import Filter from '.';

describe('Filter tests', () => {
  const wrapper = shallow(
    <Filter
      filters={[]}
      onCancel={() => 1 === 1}
      onChange={() => 1 === 1}
      onFilter={() => 1 === 1}
    />,
  );

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
