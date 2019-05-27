import {
  HOME_COUNTER_INCREMENT,
  HOME_COUNTER_DECREMENT,
} from '../../utils/constants';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_COUNTER_INCREMENT:
      return state + action.count;
    case HOME_COUNTER_DECREMENT:
      if (state > 0) {
        return state - action.count;
      }
      return state;
    default:
      return state;
  }
};

export default counterReducer;
