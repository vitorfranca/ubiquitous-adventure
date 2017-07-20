'use strict';

import React from 'react';
import fetch from '../lib/fetch';

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
    fetch(
      'http://localhost:8081/api/ToDo',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.title,
          done: false
        })
      }
    )
      .then(res => res.json())
      .then(data => this.props.onCreate)
      .catch(err => console.error(err));
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
