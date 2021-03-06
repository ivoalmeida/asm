import * as React from 'react';
import { shallow, mount, render } from 'enzyme';

import Button, { IButtonProps, LinkButton } from '.';

describe('Button tests', () => {
  const wrap = (props?: IButtonProps) => mount(<Button {...props} />);

  it('renders children when passed in', () => {
    const wrapper = wrap({ children: 'test', variant: 'danger' });
    expect(wrapper.contains('test')).toBe(true);
    wrapper.unmount();
  });

  it('should render a default button when no variant prop is passed', () => {
    const wrapper = wrap();
    expect(wrapper.find('.button')).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a default button', () => {
    const variant = 'default';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    wrapper.unmount();
  });

  it('should render a primary button', () => {
    const variant = 'primary';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a danger button', () => {
    const variant = 'danger';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a secondary button', () => {
    const variant = 'secondary';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a success button', () => {
    const variant = 'success';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a small button', () => {
    const size = 'small';
    const wrapper = wrap({ size });
    expect(wrapper.props().size).toEqual(size);
    expect(wrapper.find(`.${size}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a medium button', () => {
    const size = 'medium';
    const wrapper = wrap({ size });
    expect(wrapper.props().size).toEqual(size);
    expect(wrapper.find(`.${size}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a large button', () => {
    const size = 'large';
    const wrapper = wrap({ size });
    expect(wrapper.props().size).toEqual(size);
    expect(wrapper.find(`.${size}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a xlarge button', () => {
    const size = 'xlarge';
    const wrapper = wrap({ size });
    expect(wrapper.props().size).toEqual(size);
    expect(wrapper.find(`.${size}`)).toHaveLength(1);
  });

  it('should should be clickable', () => {
    const clickFn = jest.fn();
    const wrapper = wrap({ onClick: clickFn });
    wrapper.find('button').simulate('click');
    expect(clickFn).toHaveBeenCalled();
    wrapper.unmount();
  });
});

describe('LinkButton tests', () => {
  const wrap = (props?) => mount(<LinkButton {...props} />);

  it('renders children when passed in', () => {
    const wrapper = wrap({ children: 'test', variant: 'danger' });
    expect(wrapper.contains('test')).toBe(true);
    wrapper.unmount();
  });

  it('should render a default link button when no variant prop is passed', () => {
    const wrapper = wrap();
    expect(wrapper.find('.button')).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a default link button', () => {
    const variant = 'default';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    wrapper.unmount();
  });

  it('should render a primary link button', () => {
    const variant = 'primary';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a danger link button', () => {
    const variant = 'danger';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a secondary link button', () => {
    const variant = 'secondary';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a success link button', () => {
    const variant = 'success';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a small link button', () => {
    const size = 'small';
    const wrapper = wrap({ size });
    expect(wrapper.props().size).toEqual(size);
    expect(wrapper.find(`.${size}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a medium link button', () => {
    const size = 'medium';
    const wrapper = wrap({ size });
    expect(wrapper.props().size).toEqual(size);
    expect(wrapper.find(`.${size}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a large link button', () => {
    const size = 'large';
    const wrapper = wrap({ size });
    expect(wrapper.props().size).toEqual(size);
    expect(wrapper.find(`.${size}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a xlarge link button', () => {
    const size = 'xlarge';
    const wrapper = wrap({ size });
    expect(wrapper.props().size).toEqual(size);
    expect(wrapper.find(`.${size}`)).toHaveLength(1);
  });

  it('should should be clickable', () => {
    const clickFn = jest.fn();
    const wrapper = wrap({ onClick: clickFn });
    wrapper.find('a').simulate('click');
    expect(clickFn).toHaveBeenCalled();
    wrapper.unmount();
  });
});
