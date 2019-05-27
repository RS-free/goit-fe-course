import {
  TODOS_ADD,
  TODOS_REMOVE,
  TODOS_TOGGLE_COMPLETE,
} from '../../utils/constants';

export const addTodo = todo => ({
  type: TODOS_ADD,
  payload: todo,
});

export const removeTodo = id => ({
  type: TODOS_REMOVE,
  payload: id,
});

export const toggleComplete = id => ({
  type: TODOS_TOGGLE_COMPLETE,
  payload: id,
});
