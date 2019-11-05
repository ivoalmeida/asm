import * as React from 'react';
import { shallow } from 'enzyme';
import Box, { IBoxProps } from '.';

describe('Box tests', () => {
  const wrap = (props?: IBoxProps) => shallow(<Box {...props} />);

  it('renders children when passed in', () => {
    const wrapper = wrap({ children: 'test' });
    expect(wrapper.contains('test')).toBe(true);
  });

  it('renders flex row box by default', () => {
    const prop = 'row';
    const wrapper = wrap();
    const style = wrapper.get(0).props.style;
    expect(style).toHaveProperty('flexDirection', prop);
  });

  it('renders flex column box', () => {
    const prop = 'column';
    const wrapper = wrap({ direction: prop });
    const style = wrapper.get(0).props.style;
    expect(style).toHaveProperty('flexDirection', prop);
  });
});
