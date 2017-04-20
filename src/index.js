import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './containers/App/index.js';
import appReducer from './reducers';

const store = createStore(appReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
