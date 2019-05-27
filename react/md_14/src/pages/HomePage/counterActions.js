import {
  HOME_COUNTER_INCREMENT,
  HOME_COUNTER_DECREMENT,
} from '../../utils/constants';

export const increment = count => ({
  type: HOME_COUNTER_INCREMENT,
  count,
});

export const decrement = count => ({
  type: HOME_COUNTER_DECREMENT,
  count,
});
