import * as React from 'react';
import { mount } from 'enzyme';
import ToggleButton, { IRadioItem, IToggleButtonProps } from '.';

describe('ToggleButton tests', () => {
  const wrap = (props: IToggleButtonProps) => mount(<ToggleButton {...props} />);
  const items: IRadioItem[] = [{ label: 'Active', value: 1 }, { label: 'Inactive', value: 0 }];
  it('should render the component', () => {
    expect(wrap({ items })).toMatchSnapshot();
  });

  it('should render item props', () => {
    const wrapper = wrap({ items });
    expect(wrapper.props().items).toEqual(items);
    expect(wrapper.find('input')).toHaveLength(2);
    wrapper.unmount();
  });
});
