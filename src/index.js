import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App/index.js';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
