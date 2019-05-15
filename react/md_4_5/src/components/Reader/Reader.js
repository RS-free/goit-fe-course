import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Reader extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      text: '',
    };
  }
  onHandleInput = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };
}

Reader.propTypes = {};

export default Reader;
