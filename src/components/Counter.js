import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { counter, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Clicked: {counter} times {' '}
        <button onClick={onIncrement}>+</button> {' '}
        <button onClick={onDecrement}>-</button>
      </p>
    )
  }
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return { counter: state.counter };
}

export default connect(mapStateToProps)(Counter);