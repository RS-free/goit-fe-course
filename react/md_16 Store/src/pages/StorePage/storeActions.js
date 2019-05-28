import { STORE_ADD, STORE_REMOVE } from '../../utils/constants';

export const addStore = todo => ({
  type: STORE_ADD,
  payload: todo,
});

export const removeStore = id => ({
  type: STORE_REMOVE,
  payload: id,
});

// export const toggleComplete = id => ({
//   type: STORE_TOGGLE_COMPLETE,
//   payload: id,
// });
