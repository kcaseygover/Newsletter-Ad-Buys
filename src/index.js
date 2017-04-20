import React from 'react';
import { render } from 'react-dom';


// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

//should be importing reducers here......and the app container. ex:
//import todoApp from './reducers' && import App from './components/App'

import App from './containers/App/index.js';

// let store = createStore(reducers)

render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('app')
)
