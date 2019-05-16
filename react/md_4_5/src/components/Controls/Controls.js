import React from 'react';
import styles from './Controls.module.css';

const Controls = ({ onPrev, onNext }) => (
  <div>
    <button className={styles.button} onClick={onPrev}>
      Prev
    </button>
    <button className={styles.button} onClick={onNext}>
      Next
    </button>
  </div>
);

export default Controls;
