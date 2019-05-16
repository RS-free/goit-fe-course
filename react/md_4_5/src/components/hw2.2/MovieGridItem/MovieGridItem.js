import React, { Component } from 'react';
import styles from './MovieGridItem.module.css';

class MovieGridItem extends Comment {
  constructor(items) {
    super(items);
    this.state = {};
  }
  render() {
    const {} = this.state;
    return (
      <>
        <div className={styles.movie - card}>
          <img src="" alt="" />
          <div className={styles.content}>
            <h2 />
            <p />
          </div>
        </div>
      </>
    );
  }
}

export default MovieGridItem;
