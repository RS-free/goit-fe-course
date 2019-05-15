import React, { Component } from 'react';
import Reader from './Reader/Reader';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

class App extends Component {
  state = { count: 0 };

  updateState = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return <div>App</div>;
    // (
    //   <>
    //     <Reader />
    //     <Counter
    //       onIncrement={this.onIncrement}
    //       onDecrement={this.onDecrement}
    //       count={count}
    //     />
    //     <Publication />
    //     <Controls />
    //   </>
    // );
  }
}

export default App;
