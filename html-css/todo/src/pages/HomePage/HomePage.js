import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './counterActions';

class HomePage extends Component {
  state = {};

  render() {
    const { counter, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={() => onIncrement(3)} type="button">
          +
        </button>
        <span>{counter}</span>
        <button onClick={() => onDecrement(1)} type="button">
          -
        </button>
      </div>
    );
  }
}

const stateToProps = state => ({
  counter: state.counter,
});

const dispatchToProp = dispatch => ({
  onIncrement(count) {
    dispatch(increment(count));
  },
  onDecrement(count) {
    dispatch(decrement(count));
  },
});

export default connect(
  stateToProps,
  dispatchToProp,
)(HomePage);

// const stateToProps = state => ({
//   counter: state.counter,
// });

// export default connect(
//   stateToProps
// )(HomePage);
