import React from 'react';
import PropTypes from 'prop-types';
import classes from './TodosHeader.module.css';

const TodosHeader = ({ handleChangeFilter, filter }) => (
  <div>
    <button
      className={classes.button}
      onClick={() => handleChangeFilter('all')}
      type="button"
      disabled={filter === 'all'}
    >
      All
    </button>
    <button
      className={classes.button}
      onClick={() => handleChangeFilter('inProgress')}
      type="button"
      disabled={filter === 'inProgress'}
    >
      In progress
    </button>
    <button
      className={classes.button}
      onClick={() => handleChangeFilter('completed')}
      type="button"
      disabled={filter === 'completed'}
    >
      Completed
    </button>
  </div>
);

TodosHeader.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default TodosHeader;
