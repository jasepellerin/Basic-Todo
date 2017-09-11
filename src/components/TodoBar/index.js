import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import './TodoBar.css';

class TodoBar extends Component {

  render() {
    const { title } = this.props
    return (
      <AppBar
        title={title}
        iconElementRight={<FlatButton label="New" />}
      />
    )
  }
}

export default TodoBar;
