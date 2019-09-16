import * as React from 'react';
import { shallow } from 'enzyme';

import Badge, { IBadgeProps } from '.';

describe('Badge tests', () => {
  const wrap = (props: IBadgeProps) => shallow(<Badge {...props} />);

  it('renders children when passed in', () => {
    const wrapper = wrap({ children: 'test', variant: 'primary' });
    expect(wrapper.contains('test')).toBe(true);
  });
});
