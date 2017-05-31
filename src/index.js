import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// import createBrowserHistory from 'history/createBrowserHistory';

import App from './containers/App/index.js';
import store from './store';

// const history = createBrowserHistory();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
