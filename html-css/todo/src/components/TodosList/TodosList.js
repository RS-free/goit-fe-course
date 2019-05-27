import React from 'react';
import PropTypes from 'prop-types';
import classes from './TodoList.module.css';

const TodosList = ({ data, onHandleDelete, onHandleChecked }) => (
  <ul className={classes.todoList}>
    {data.map(el => (
      <li className={classes.todo} key={el.id}>
        <input
          defaultChecked={el.isCompleted}
          className={classes.checkbox}
          type="checkbox"
          onChange={() => onHandleChecked(el.id)}
        />
        <h2>{el.title}</h2>
        <span>{el.description}</span>
        <button
          onClick={() => onHandleDelete(el.id)}
          className={classes.close}
          type="button"
        >
          x
        </button>
      </li>
    ))}
  </ul>
);

TodosList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onHandleDelete: PropTypes.func.isRequired,
  onHandleChecked: PropTypes.func.isRequired,
};

export default TodosList;
