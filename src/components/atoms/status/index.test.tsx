import * as React from 'react';
import { shallow } from 'enzyme';

import Status from '.';

describe('Status tests', () => {
  const wrap = props => shallow(<Status {...props} />);

  it('should render the component', () => {
    const wrapper = wrap({ active: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render active style', () => {
    const wrapper = wrap({ active: true });
    expect(wrapper.find('.active')).toHaveLength(1);
  });

  it('should not render active style', () => {
    const wrapper = wrap({ active: false });
    expect(wrapper.find('.active')).toHaveLength(0);
  });
});
