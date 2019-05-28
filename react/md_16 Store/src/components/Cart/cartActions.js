import { CART_ADD, CART_REMOVE, CART_SHOW } from '../../utils/constants';

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
