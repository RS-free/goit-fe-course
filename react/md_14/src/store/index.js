import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducers from './rootReducers';

const Store = createStore(rootReducers, devToolsEnhancer());

export default Store;
