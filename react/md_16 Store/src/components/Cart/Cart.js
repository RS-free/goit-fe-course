import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Cart extends Component {
  state = {};

  render() {
    const { items = [], sum, itemsCount } = this.props;

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
};

const mapStateToProps = state => ({
  items: state.cart.items,
  sum: state.cart.sum,
  itemsCount: state.cart.itemsCount,
});

export default connect(mapStateToProps)(Cart);
