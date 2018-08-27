import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('shallow renders correctly', () => {
  shallow(<App />);
});