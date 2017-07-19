'use strict';

import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import Counter from './../components/Counter';
import { incrementCounter, decrementCounter } from '../actions';

class App extends React.Component {
  render() {
    return (
      <Counter
        onIncrement={() => this.props.dispatch(incrementCounter())}
        onDecrement={() => this.props.dispatch(decrementCounter())} />
    );
  }
};

export default connect()(App);