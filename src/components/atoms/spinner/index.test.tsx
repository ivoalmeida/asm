import * as React from 'react';
import { mount } from 'enzyme';
import Spinner from '.';

describe('Spinner tests', () => {
  const wrap = (props: { size?: string }) => mount(<Spinner {...props} />);

  it('should render the component', () => {
    expect(wrap({})).toMatchSnapshot();
  });

  it('should render a xsmall spinner', () => {
    const size = 'xsmall';
    const wrapper = wrap({ size });
    expect(wrapper.props().size).toEqual(size);
    expect(wrapper.find(`.${size}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a xsmall spinner', () => {
    const size = 'small';
    const wrapper = wrap({ size });
    expect(wrapper.props().size).toEqual(size);
    expect(wrapper.find(`.${size}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a medium spinner', () => {
    const size = 'medium';
    const wrapper = wrap({ size });
    expect(wrapper.props().size).toEqual(size);
    expect(wrapper.find(`.${size}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a large spinner', () => {
    const size = 'large';
    const wrapper = wrap({ size });
    expect(wrapper.props().size).toEqual(size);
    expect(wrapper.find(`.${size}`)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render a xlarge spinner', () => {
    const size = 'xlarge';
    const wrapper = wrap({ size });
    expect(wrapper.props().size).toEqual(size);
    expect(wrapper.find(`.${size}`)).toHaveLength(1);
    wrapper.unmount();
  });
});
