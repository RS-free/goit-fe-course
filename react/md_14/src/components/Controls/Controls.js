import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCart } from '../Cart/cartActions';
import classes from './Controls.module.css';

class Controls extends Component {
  state = {
    counter: 1,
  };

  onIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  onDecrement = () => {
    this.setState(state => {
      if (state.counter > 1) {
        return { counter: state.counter - 1 };
      }
      return state;
    });
  };

  onHandleAdd = () => {
    const { add, data } = this.props;
    const newData = { ...data };
    newData.count = this.state.counter;
    add(newData);
  };

  render() {
    const { counter } = this.state;
    const { add, data } = this.props;

    return (
      <div>
        <div className={classes.controlsButtons}>
          <button
            onClick={this.onDecrement}
            type="button"
            className={classes.button}
          >
            -
          </button>
          <span>{counter}</span>
          <button
            onClick={this.onIncrement}
            type="button"
            className={classes.button}
          >
            +
          </button>
        </div>
        <button onClick={() => add(data)} type="button" className={classes.add}>
          Add
        </button>
      </div>
    );
  }
}

Controls.propTypes = {
  add: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired,
};

const mapDispatchToProps = dispatch => ({
  add: data => dispatch(addCart(data)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Controls);
