import {
  STORE_ADD,
  STORE_REMOVE,
  STORE_TOGGLE_COMPLETE,
} from '../../utils/constants';

export const addTodo = todo => ({
  type: STORE_ADD,
  payload: todo,
});

export const removeTodo = id => ({
  type: STORE_REMOVE,
  payload: id,
});

export const toggleComplete = id => ({
  type: STORE_TOGGLE_COMPLETE,
  payload: id,
});
