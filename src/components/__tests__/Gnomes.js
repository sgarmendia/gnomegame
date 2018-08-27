import React from 'react';
import { shallow } from 'enzyme';
import Gnomes from '../Gnomes';

it('shallow renders correctly', () => {
  shallow(<Gnomes />);
});