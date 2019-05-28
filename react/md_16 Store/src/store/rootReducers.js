import { combineReducers } from 'redux';
import counterReducer from '../pages/HomePage/counterReducer';
import storeReducer from '../pages/StorePage/storeReducer';
import cartReducer from '../components/Cart/cartReducer';

const rootReducers = combineReducers({
  counter: counterReducer,
  store: storeReducer,
  cart: cartReducer,
});

export default rootReducers;
