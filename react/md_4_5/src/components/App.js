import React, { Component } from 'react';
import Reader from './hw2.1/Reader/Reader';
import data from './Publications.json';

import MoviePage from './hw2.2/MoviePage/MoviePage';
import movies from './movies.json';

class App extends Component {
  state = { count: 0 };

  updateState = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <>
        <Reader data={data} />
        <MoviePage movies={movies} />
      </>
    );
  }
}

export default App;
