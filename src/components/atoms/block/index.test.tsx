import * as React from 'react';
import { shallow } from 'enzyme';
import Block from '.';

describe('Block tests', () => {
  const wrap = (props = {}) => shallow(<Block {...props} />);

  it('renders children when passed in', () => {
    const wrapper = wrap({ children: 'test' });
    expect(wrapper.contains('test')).toBe(true);
  });
});
