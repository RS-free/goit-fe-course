import {
  STORE_ADD,
  STORE_REMOVE,
  STORE_TOGGLE_COMPLETE,
} from '../../utils/constants';

const initialStore = [
  {
    title: 'todo 1',
    description: 'descr',
    id: 'adsasdad',
    isCompleted: false,
    cost: 40.5,
  },
  {
    title: 'todo 2',
    description: 'deasdasdasdscr',
    id: 'aoiqwsdad',
    isCompleted: true,
    cost: 77.3,
  },
];

const storeReducer = (state = initialStore, action) => {
  switch (action.type) {
    case STORE_ADD:
      return [...state, action.payload];
    case STORE_REMOVE:
      return state.filter(el => el.id !== action.payload);
    case STORE_TOGGLE_COMPLETE:
      return state.map(el => {
        if (el.id === action.payload) {
          return {
            ...el,
            isCompleted: !el.isCompleted,
          };
        }
        return el;
      });
    default:
      return state;
  }
};

export default storeReducer;
