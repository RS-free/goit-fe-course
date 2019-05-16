import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.data,
      page: 0,
    };
  }
  onHandleInput = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  onNext = () => {
    console.log('next');
    if (this.state.page < this.state.items.length - 1)
      this.setState(prevState => ({
        page: prevState.page + 1,
      }));
  };

  onPrev = () => {
    console.log('prev');
    if (this.state.page > 0)
      this.setState(prevState => ({
        page: prevState.copagent - 1,
      }));
  };

  render() {
    const { items, page } = this.state;
    return (
      <>
        <Publication data={items[page]} />
        <Counter page={page} max={items.length} />
        <Controls onNext={this.onNext} onPrev={this.onPrev} page={page} />
      </>
    );
  }
}

Reader.propTypes = {
  count: PropTypes.number,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

Reader.defaultProps = {
  count: 1,
};

export default Reader;
