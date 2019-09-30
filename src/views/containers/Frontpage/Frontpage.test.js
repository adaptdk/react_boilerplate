import React from 'react';
import ReactDOM from 'react-dom';
import Frontpage from './Frontpage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Frontpage />, div);
});
