import * as React from 'react';
import { mount } from 'enzyme';
import Checkbox from '.';

describe('Checkbox tests', () => {
  const wrap = props => mount(<Checkbox {...props} />);

  it('should render the component', () => {
    expect(wrap({})).toMatchSnapshot();
  });

  it('should render the multi selection style when isMultiSelection is prop is passed in', () => {
    const wrapper = wrap({ isMultiSelection: true });
    expect(wrapper.props().isMultiSelection).toEqual(true);
    // tslint:disable-next-line: no-console
    console.debug(wrapper.html());
    expect(wrapper.find('.multiSelection')).toHaveLength(1);
    wrapper.unmount();
  });
});
