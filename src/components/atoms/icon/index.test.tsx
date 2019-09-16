import * as React from 'react';
import { shallow } from 'enzyme';
import Icon, { IIconProps } from '.';

describe('Icon tests', () => {
  const wrap = (props: IIconProps) => shallow(<Icon {...props} />);

  it('should render the component', () => {
    expect(wrap).toMatchSnapshot();
  });
});
