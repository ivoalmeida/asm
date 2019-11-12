import * as React from 'react';
import { shallow } from 'enzyme';

import Block from '.';

describe('Block tests', () => {
  const wrap = (props = {}) => shallow(<Block {...props} />);

  it('renders component', () => {
    const wrapper = wrap();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders children when passed in', () => {
    const children = (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi iure voluptatem facere a,
        optio eaque nisi ipsum soluta, ea, corrupti eos deleniti nesciunt harum libero! Minus
        facilis vitae maiores libero?
      </p>
    );
    const wrapper = wrap({ children });
    expect(wrapper.contains(children)).toBe(true);
  });
});
