import React from 'react';
import styles from './Controls.module.css';

const Controls = ({ onChange, onClick }) => (
  <section className={styles.controls}>
    <input typeName={styles.number} onChange={onChange} />
    <button type={styles.button} onClick={onClick}>
      Deposit
    </button>
    <button type={styles.button} onClick={onClick}>
      Withdraw
    </button>
  </section>
);

export default Controls;
