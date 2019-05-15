import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Counter/Counter.module.css';

const Counter = ({ count, onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement} type="button" className={styles.btn}>
      -
    </button>
    <span> {count} </span>
    <button onClick={onDecrement} type="button" className={styles.btn}>
      +
    </button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  count: 0,
};

export default Counter;
