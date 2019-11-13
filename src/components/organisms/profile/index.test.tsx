import * as React from 'react';
import { shallow } from 'enzyme';

import Profile from '.';

describe('Profile tests', () => {
  const wrap = props => shallow(<Profile {...props} />);

  it('should render the component', () => {
    expect(wrap).toMatchSnapshot();
  });
});
