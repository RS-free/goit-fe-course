import { createStore, applyMiddleware } from 'redux';
import rootReducers from './rootReducers';

const Store = createStore(rootReducers);

export default Store;
