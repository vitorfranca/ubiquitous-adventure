'use strict';

import React from 'react';
import toDoService from '../services/ToDo';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditingTitle: false,
      ...props.todo
    };
  }

  toggleStatus() {
    toDoService.update(this.state);
  }

  delete() {
    toDoService.delete(this.state._id);
  }

  handleChange(e) {
    const title = e.target.value;
    return this.setState({ title });
  }

  changeStatus() {
    this.setState(
      { done: !this.state.done },
      this.toggleStatus);
  }

  toggleEditingTitle() {
    this.setState({ isEditingTitle: !this.state.isEditingTitle });
  }

  render() {
    const todo = this.state;
    return (
      <div key={todo._id}>
        <input type="checkbox"
          checked={todo.done}
          onChange={this.changeStatus.bind(this)} />

        { this.state.isEditingTitle &&
          <input type="text" name="title"
          value={this.state.title}
          autoFocus
          onBlur={this.toggleEditingTitle.bind(this)}
          onChange={this.handleChange.bind(this)} />
        }

        { !this.state.isEditingTitle &&
          <span onClick={this.toggleEditingTitle.bind(this)}>
            {todo.title}
          </span>
        }

        <span onClick={this.delete.bind(this)}>&#10060;</span>
      </div>
    );
  }
}

export default ToDo;
