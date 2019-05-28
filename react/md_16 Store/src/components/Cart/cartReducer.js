import {
  CART_ADD,
  CART_SHOW,
  CART_REMOVE,
  CART_INCREMENT,
  CART_DECREMENT,
} from '../../utils/constants';
import { checkSum } from '../../utils/helpers';

const initialState = {
  items: [],
  sum: 0,
  itemsCount: 0,
  isOpened: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_ADD: {
      if (state.items.find(el => el.id === payload.id)) {
        const newItems = state.items.map(el => {
          if (el.id === payload.id) {
            const count = el.count + payload.count;
            return {
              ...el,
              count,
            };
          }
          return el;
        });
        const newState = { ...state, items: newItems };
        const sumData = checkSum(newState.items);
        newState.sum = sumData.sum;
        newState.itemsCount = sumData.itemsCount;

        return newState;
      }
      const newState = { ...state, items: [...state.items, payload] };
      const sumData = checkSum(newState.items);
      newState.sum = sumData.sum;
      newState.itemsCount = sumData.itemsCount;
      return newState;
    }
    case CART_DECREMENT:
    case CART_INCREMENT: {
      const newState = {
        ...state,
        items: state.items.map(el => {
          if (el.id === payload && type === CART_INCREMENT) {
            return { ...el, count: el.count + 1 };
          }
          if (el.id === payload && type === CART_DECREMENT && el.count > 1) {
            return { ...el, count: el.count - 1 };
          }

          return el;
        }),
      };
      const sumData = checkSum(newState.items);
      newState.sum = sumData.sum;
      newState.itemsCount = sumData.itemsCount;
      return newState;
    }

    case CART_REMOVE:
      // eslint-disable-next-line no-case-declarations
      const newState = {
        ...state,
        items: state.items.filter(el => el.id !== payload),
      };
      // eslint-disable-next-line no-case-declarations
      const sumData = checkSum(newState.items);
      newState.sum = sumData.sum;
      newState.itemsCount = sumData.itemsCount;
      return newState;

    case CART_SHOW:
      return { ...state, isOpened: !state.isOpened };
    default:
      return state;
  }
};
