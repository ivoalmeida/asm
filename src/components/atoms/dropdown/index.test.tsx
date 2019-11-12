import * as React from 'react';
import { mount } from 'enzyme';
import Dropdown, { IDropDownProps, ISelectItem } from '.';

describe('Dropdown tests', () => {
  const wrap = (props: IDropDownProps) => mount(<Dropdown {...props} />);

  const options = [
    { label: 'Option 1', value: 22 },
    { label: 'Option 2', value: 33 },
    { label: 'Option 3', value: 44 },
    { label: 'Option 4', value: 55 },
    { label: 'Option 5', value: 66 },
  ];

  it('should render the component', () => {
    expect(wrap({ options })).toMatchSnapshot();
  });

  it('should render dropdown with label', () => {
    const label = 'something';
    const wrapper = wrap({ options, label });
    expect(wrapper.props().label).toEqual(label);
    expect(wrapper.find('.label')).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render dropdown with default option', () => {
    const defaultValue = 99;
    const optionsWithDefault = [
      ...options,
      { label: 'Select me', value: defaultValue, default: true },
    ];
    const wrapper = wrap({ options: optionsWithDefault });
    expect(wrapper.props().options).toEqual(optionsWithDefault);
    expect(wrapper.find('select').props().value).toEqual(defaultValue);
    wrapper.unmount();
  });
});
