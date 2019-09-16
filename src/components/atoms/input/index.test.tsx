import * as React from 'react';
import { shallow } from 'enzyme';
import InputText from '.';

describe('InputText tests', () => {
  const wrap = (props = { placeholder: 'search' }) => shallow(<InputText {...props} />);

  it('renders props when passed in', () => {
    const wrapper = wrap({ placeholder: 'search' });
    expect(wrapper.find({ placeholder: 'search' })).toHaveLength(1);
  });
});
