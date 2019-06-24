import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
<<<<<<< HEAD
import store from './store';
import {Provider} from 'react-redux';
import { loadProducts } from './actionCreators';

store.dispatch(loadProducts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
=======

ReactDOM.render(
  <App />,
>>>>>>> 3fa72d2220967320beaffe4effd2d0b2c2ed2190
  document.getElementById('root')
);
