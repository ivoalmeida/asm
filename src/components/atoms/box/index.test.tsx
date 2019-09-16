import * as React from 'react';
import { shallow } from 'enzyme';
import Box, { IBoxProps } from '.';

describe('Box tests', () => {
  const wrap = (props: IBoxProps) => shallow(<Box {...props} />);

  it('renders children when passed in', () => {
    const wrapper = wrap({ direction: 'column', children: 'test' });
    expect(wrapper.contains('test')).toBe(true);
  });
});
