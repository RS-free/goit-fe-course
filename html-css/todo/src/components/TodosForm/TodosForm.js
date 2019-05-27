import React from 'react';
import PropTypes from 'prop-types';

const TodosForm = ({ onHandleInput, onHandleSubmit }) => (
  <form action="">
    <input
      placeholder="title"
      onChange={onHandleInput}
      type="text"
      name="title"
    />
    <input
      placeholder="description"
      onChange={onHandleInput}
      type="text"
      name="description"
    />
    <button type="button" onClick={onHandleSubmit}>
      add
    </button>
  </form>
);

TodosForm.propTypes = {
  onHandleInput: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
};

export default TodosForm;
