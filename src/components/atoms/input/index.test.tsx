import * as React from 'react';
import { shallow } from 'enzyme';
import Input from '.';

describe('Input tests', () => {
  const wrap = (props = { placeholder: 'search' }) => shallow(<Input {...props} />);

  it('renders props when passed in', () => {
    const wrapper = wrap({ placeholder: 'search' });
    expect(wrapper.find({ placeholder: 'search' })).toHaveLength(1);
  });
});
