import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../Header';

it('shallow renders correctly', () => {
  shallow(<Header />);
  mount(<Header />);
});
