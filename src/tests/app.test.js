import React from 'react';
import ReactDOM from 'react-dom';
import TodoBar from './components/TodoBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoBar />, div);
});
