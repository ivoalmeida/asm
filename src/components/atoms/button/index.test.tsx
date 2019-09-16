import * as React from 'react';
import { shallow } from 'enzyme';
import Button, { IButtonProps } from '.';

describe('Button tests', () => {
  const wrap = (props: IButtonProps = { variant: 'primary', children: '' }) =>
    shallow(<Button {...props} />);

  it('renders children when passed in', () => {
    const wrapper = wrap({ children: 'test', variant: 'danger' });
    expect(wrapper.contains('test')).toBe(true);
  });
});
