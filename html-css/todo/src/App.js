import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import TodosPage from './pages/TodosPage/TodosPage';
import Store from './store';

const App = () => (
  <Provider store={Store}>
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/todos" component={TodosPage} />
    </Router>
  </Provider>
);

export default App;
