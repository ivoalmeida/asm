import * as React from 'react';
import { mount } from 'enzyme';

import CtaContainer from '.';

describe('CtaContainer tests', () => {
  const wrap = (props: { align: string | 'left|right'; children: any }) =>
    mount(<CtaContainer {...props} />);

  const children = (
    <>
      <button>test1</button>
      <button>test2</button>
    </>
  );

  it('renders children when passed in', () => {
    const wrapper = wrap({ children, align: 'something' });
    expect(wrapper.contains('test1')).toBe(true);
    expect(wrapper.contains('test2')).toBe(true);
  });

  it('should render left style', () => {
    const align = 'left';
    const wrapper = wrap({ children, align });
    expect(wrapper.props().align).toEqual(align);
    expect(wrapper.find(`.${align}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render right style', () => {
    const align = 'right';
    const wrapper = wrap({ children, align });
    expect(wrapper.props().align).toEqual(align);
    expect(wrapper.find(`.${align}`)).toHaveLength(1);
    wrapper.unmount();
  });
});
