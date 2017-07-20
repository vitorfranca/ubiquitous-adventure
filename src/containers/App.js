'use strict';

import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import toDoService from '../services/ToDo';

import {
  incrementCounter,
  decrementCounter,
  populateTodos
} from '../actions';

// import Counter    from './../components/Counter';
import CreateToDo from './../components/CreateToDo';
import ListToDo   from './../components/ListToDo';

class App extends React.Component {
  updateList() {
    toDoService.list()
      .then(todos => {
        this.props.dispatch(populateTodos(todos))
      });
  }

  render() {
    return (
      <div>
        <CreateToDo onCreate={this.updateList.bind(this)}/>
        <ListToDo todos={this.props.todos}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(App);
