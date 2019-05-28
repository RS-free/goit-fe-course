import { CART_ADD } from '../../utils/constants';
import { checkSum } from '../../utils/helpers';

const initialState = {
  items: [],
  sum: 0,
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
      const sum = checkSum(newState.items);
      newState.sum = sum;
      return newState;
    }
    default:
      return state;
  }
};
