import * as React from 'react';
import { mount } from 'enzyme';
import Icon, { IIconProps } from '.';

describe('Icon tests', () => {
  const wrap = (props: IIconProps) => mount(<Icon {...props} />);

  it('should render the component', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('should render a search icon', () => {
    const variant = 'search';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a actions icon', () => {
    const variant = 'actions';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a changelog icon', () => {
    const variant = 'changelog';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render cog icon bagde', () => {
    const variant = 'cog';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a disabled icon', () => {
    const variant = 'disabled';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a drag icon', () => {
    const variant = 'drag';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a duplicate icon', () => {
    const variant = 'duplicate';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a edit icon', () => {
    const variant = 'edit';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render eye icon bagde', () => {
    const variant = 'eye';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a filter icon', () => {
    const variant = 'filter';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a filter2 icon', () => {
    const variant = 'filter2';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a leftArrow icon', () => {
    const variant = 'leftArrow';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a plus icon', () => {
    const variant = 'plus';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a rightArrow icon', () => {
    const variant = 'rightArrow';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render tag icon', () => {
    const variant = 'tag';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a times icon', () => {
    const variant = 'times';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a trash icon', () => {
    const variant = 'trash';
    const wrapper = wrap({ variant });
    expect(wrapper.props().variant).toEqual(variant);
    expect(wrapper.find(`.${variant}`)).toHaveLength(1);
    wrapper.unmount();
  });
});
