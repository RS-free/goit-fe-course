import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './rootReducers';
import logger from '../middleware/logger';

const middleware = [logger];

const Store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default Store;
