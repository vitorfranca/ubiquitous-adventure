'use strict';

import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';

import {
  incrementCounter,
  decrementCounter
} from '../actions';

import Counter    from './../components/Counter';
import CreateToDo from './../components/CreateToDo';
import ListToDo   from './../components/ListToDo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: props.todos };
  }

  updateList() {
    fetch('http://localhost:8081/api/ToDo')
      .then(res => res.json())
      .then(todos => this.setState({todos}));
  }

  render() {
    return (
      <div>
        <CreateToDo onCreate={this.updateList.bind(this)}/>
        <ListToDo todos={this.state.todos}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(App);
