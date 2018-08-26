import React from 'react';
import ReactDOM from 'react-dom';
import Gnomes from '../Gnomes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gnomes />, div);
  ReactDOM.unmountComponentAtNode(div);
});

