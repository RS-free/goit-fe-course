import React, { Component } from 'react';
import styles from './MoviePage.module.css';

import MovieGrid from '../MovieGrid/MovieGrid';
import SearchBar from '../SearchBar/SearchBar';

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {} = this.state;
    return (
      <>
        <div className={styles.container}>
          <SearchBar />
          <MovieGrid />
        </div>
      </>
    );
  }
}

export default MoviePage;
