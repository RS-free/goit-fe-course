import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeCart, increment, decrement } from './cartActions';
// eslint-disable-next-line import/no-named-as-default
import Controls from '../Controls/Controls';

class Cart extends Component {
  state = {};

  render() {
    const {
      items = [],
      sum,
      itemsCount,
      remove,
      onIncrement,
      onDecrement,
    } = this.props;

    return (
      <div>
        <h3>Cart</h3>
        <h5>
          Items: {itemsCount} Sum: {sum}
        </h5>
        <ul>
          {items.map(el => (
            <li key={el.id}>
              <h4>{el.title}</h4>
              <p>{el.description}</p>
              <p>
                Items: {el.count} / $ {el.cost} / sum : $
                {Number(el.cost * el.count).toFixed(2)}
              </p>
              <div>
                <Controls
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  propsCounter={el.count}
                  disabledButton
                  id={el.id}
                />
              </div>
              <button type="button" onClick={() => remove(el.id)}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Cart.propTypes = {
  items: PropTypes.func.isRequired,
  sum: PropTypes.func.isRequired,
  itemsCount: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.cart.items,
  sum: state.cart.sum,
  itemsCount: state.cart.itemsCount,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: id => dispatch(increment(id)),
  onDecrement: id => dispatch(decrement(id)),
  remove: id => dispatch(removeCart(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
