import React, { Component } from 'react';
import styles from './MoviePage.module.css';

import MovieGrid from './MovieGrid';
import MovieGridItem from './MovieGridItem';
import SearchBar from './SearchBar';

class MoviePage extends Comment {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {} = this.state;
    return (
      <>
        <div className={styles.container}>
          <MovieGrid />
          <MovieGridItem />
          <SearchBar />
        </div>
      </>
    );
  }
}

export default MoviePage;
