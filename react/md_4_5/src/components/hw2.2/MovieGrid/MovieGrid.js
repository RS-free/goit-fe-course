import React from 'react';
import styles from './MovieGrid.module.css';
import MovieGridItem from '../MovieGridItem/MovieGridItem';

const MovieGrid = () => (
  <div className={styles['movie-grid']}>
    <MovieGridItem />
  </div>
);

export default MovieGrid;
