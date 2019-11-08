import * as React from 'react';
import { mount } from 'enzyme';

import Badge, { IBadgeProps } from '.';

describe('Badge tests', () => {
  const wrap = (props: IBadgeProps) => mount(<Badge {...props} />);

  it('renders children when passed in', () => {
    const wrapper = wrap({ children: 'test', variant: 'primary' });
    expect(wrapper.contains('test')).toBe(true);
  });

  it('should render a primary bagde', () => {
    const variant = 'primary';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a secondary bagde', () => {
    const variant = 'secondary';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a success bagde', () => {
    const variant = 'success';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a danger bagde', () => {
    const variant = 'danger';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a warning bagde', () => {
    const variant = 'warning';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });
});
