import * as React from 'react';
import { shallow } from 'enzyme';
import Label from '.';

describe('Label tests', () => {
  const wrap = (props = {}) => shallow(<Label {...props} />);

  it('renders children when passed in', () => {
    const wrapper = wrap({ children: 'test' });
    expect(wrapper.contains('test')).toBe(true);
  });

  it('renders props when passed in', () => {
    const wrapper = wrap({ htmlFor: 'column' });
    expect(wrapper.find({ htmlFor: 'column' })).toHaveLength(1);
  });
});
