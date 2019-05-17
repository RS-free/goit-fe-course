import React from 'react';
import styles from './Balance.module.css';

const Balance = ({ income, outcome, balance }) => (
  <section className={styles.balance}>
    <span>⬆️{income}$</span>
    <span>⬇️{outcome}$</span>
    <span>Balance: {balance}$</span>
  </section>
);

export default Balance;
