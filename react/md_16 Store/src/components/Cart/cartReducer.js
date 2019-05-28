import { CART_ADD, CART_SHOW } from '../../utils/constants';
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
    case CART_SHOW:
      return { ...state, isOpened: !state.isOpened };
    default:
      return state;
  }
};
