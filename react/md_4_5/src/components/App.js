import React, { Component } from 'react';
import Reader from './Reader/Reader';
import data from './Publications.json';

class App extends Component {
  state = { count: 0 };

  updateState = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return <Reader data={data} />;
  }
}

export default App;
