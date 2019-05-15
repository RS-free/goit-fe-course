import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      country: '',
    };
  }

  onHandleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { name, email, country } = this.state;
    e.preventDefault();

    this.props.onSubmit({ name, email, country });
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
          placeholder="name"
          onChange={this.onHandleInput}
          type="text"
          name="name"
        />
        <input
          placeholder="email"
          onChange={this.onHandleInput}
          type="email"
          name="email"
        />
        <input
          placeholder="country"
          onChange={this.onHandleInput}
          type="text"
          name="country"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
