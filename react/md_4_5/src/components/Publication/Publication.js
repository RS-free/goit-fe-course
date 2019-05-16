import React from 'react';
import styles from './Publication.module.css';

const Publications = ({ data }) => (
  <article className={styles.publication}>
    <h2 className={styles.h2}>{data.title}</h2>
    <p className={styles.p}>{data.text}</p>
  </article>
);

export default Publications;
