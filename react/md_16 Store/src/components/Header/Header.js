import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showCart } from '../Cart/cartActions';
import classes from './Header.module.css';

function Header({ toggleCart }) {
  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <span>iStore</span>
        <button type="button" className={classes.button} onClick={toggleCart}>
          open cart
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(showCart()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Header);
