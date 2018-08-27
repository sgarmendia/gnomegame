import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

it('shallow renders correctly', () => {
  shallow(<Header />);
});
