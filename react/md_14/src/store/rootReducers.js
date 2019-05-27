import { combineReducers } from 'redux';
import counterReducer from '../pages/HomePage/counterReducer';
import todosReducer from '../pages/TodosPage/todosReducer';

const rootReducers = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export default rootReducers;
