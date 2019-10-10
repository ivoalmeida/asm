import * as React from 'react';
import { shallow } from 'enzyme';
import Pagination from '.';

describe('Pagination tests', () => {
  const wrapper = shallow(
    <Pagination pageLimit={30} totalRecords={200} onPageChanged={() => 1 === 1} />,
  );

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
