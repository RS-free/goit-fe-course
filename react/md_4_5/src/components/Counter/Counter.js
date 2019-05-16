import React, { Component } from 'react';
import styles from './Counter.module.css';

const Counter = ({ page, max }) => (
  <p className={styles.counter}>
    {page + 1}/{max}
  </p>
);

export default Counter;
