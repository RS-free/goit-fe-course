/* eslint-disable consistent-return */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCart } from '../Cart/cartActions';
import classes from './Controls.module.css';

class Controls extends Component {
  state = {
    counter: this.props.propsCounter,
  };

  onIncrement = () => {
    const { id, onIncrement, disabledButton } = this.props;

    this.setState(
      state => ({ counter: state.counter + 1 }),
      () => {
        if (disabledButton) onIncrement(id);
      },
    );
  };

  onDecrement = () => {
    const { id, onDecrement, disabledButton } = this.props;

    this.setState(
      state => {
        if (state.counter > 1) {
          return { counter: state.counter - 1 };
        }
      },
      () => {
        if (disabledButton) onDecrement(id);
      },
    );
  };

  onHandleAdd = () => {
    const { add, data } = this.props;
    const newData = { ...data };
    newData.count = this.state.counter;
    add(newData);
  };

  render() {
    const { counter } = this.state;
    const { disabledButton } = this.props;

    return (
      <>
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
        {!disabledButton && (
          <button
            onClick={this.onHandleAdd}
            type="button"
            className={classes.add}
          >
            Add
          </button>
        )}
      </>
    );
  }
}

Controls.propTypes = {
  add: PropTypes.func,
  data: PropTypes.shape({}),
  disabledButton: PropTypes.bool,
  propsCounter: PropTypes.number,
  id: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

Controls.defaultProps = {
  add() {},
  data: {},
  disabledButton: false,
  propsCounter: 1,
};

const mapDispatchToProps = dispatch => ({
  add: data => dispatch(addCart(data)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Controls);
