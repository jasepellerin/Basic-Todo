import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionDone from 'material-ui/svg-icons/action/done';
import './TodoItem.css';

class TodoItem extends Component {

  render() {
    const { title, info } = this.props
    return (
      <Card
        className="item"
      >
        <CardHeader
          title={title}
        />
        <CardText>
          {info}
        </CardText>
        <CardActions>
          <ActionDelete />
          <ActionDone />
        </CardActions>
      </Card>
    )
  }
}

export default TodoItem;
