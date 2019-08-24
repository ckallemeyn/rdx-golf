import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/players.js';
// reducers path will need to be updated
import middleware from '../middleware/index.js';

const store = createStore(reducers, middleware);

console.log('found the state', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </ Provider>, document.getElementById('app'));
