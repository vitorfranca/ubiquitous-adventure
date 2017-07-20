'use strict';

import React from 'react';
import toDoService from '../services/ToDo';

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  handleChange(e) {
    const title = e.target.value;
    return this.setState({ title });
  }

  submit() {
    toDoService.create(this.state)
      .then(this.props.onCreate);
    this.setState({ title: '' });
  }

  render() {
    return (
      <div>
        <input type="text" name="title"
          autoFocus
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleChange.bind(this)} />

        <input type="submit" value="Create"
          onClick={this.submit.bind(this)} />
      </div>
    );
  }
}

export default CreateTodo;
