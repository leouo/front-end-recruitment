import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from 'Store';
import App from './app';

import '../scss/_main.scss';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('[data-js="app"]')
);
