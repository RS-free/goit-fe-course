import {
  CART_ADD,
  CART_REMOVE,
  CART_SHOW,
  CART_INCREMENT,
  CART_DECREMENT,
} from '../../utils/constants';

export const addCart = data => ({
  type: CART_ADD,
  payload: data,
});

export const removeCart = id => ({
  type: CART_REMOVE,
  payload: id,
});

export const showCart = () => ({
  type: CART_SHOW,
});

export const increment = id => ({
  type: CART_INCREMENT,
  payload: id,
});

export const decrement = id => ({
  type: CART_DECREMENT,
  payload: id,
});
