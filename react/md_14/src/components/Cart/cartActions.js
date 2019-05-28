import { CART_ADD, CART_REMOVE } from '../../utils/constants';

export const addCart = data => ({
  type: CART_ADD,
  payload: data,
});

export const removeCart = id => ({
  type: CART_REMOVE,
  payload: id,
});
