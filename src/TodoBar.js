import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import './TodoBar.css';

const TodoBar = () => (
  <AppBar
    title="Todo List"
    iconElementRight={<FlatButton label="New" />}
  />
)

export default TodoBar;
