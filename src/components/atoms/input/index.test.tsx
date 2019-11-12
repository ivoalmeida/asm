import * as React from 'react';
import { mount } from 'enzyme';
import Input, { IInputProps } from '.';

describe('Input tests', () => {
  const wrap = (props: IInputProps) => mount(<Input {...props} />);

  it('should render the component', () => {
    expect(wrap).toMatchSnapshot();
  });

  it('renders props when passed in', () => {
    const placeholder = 'search';
    const wrapper = wrap({ placeholder });
    expect(wrapper.props().placeholder).toEqual(placeholder);
    wrapper.unmount();
  });
});
