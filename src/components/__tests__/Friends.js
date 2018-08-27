import React from 'react';
import { shallow } from 'enzyme';
import Friends from '../Friends';

it('shallow renders correctly', () => {
  shallow(<Friends />);
});