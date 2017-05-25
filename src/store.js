import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { loadState } from '../localStorage';

import reducer from './reducers';
import tableReducer from './reducers/table';
import appReducer from './reducers/newsletterForm';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const persistedState = localStorage.getItem('ad') ? loadState() : [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  persistedState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(mySaga);

// console.log('persistedState', persistedState);
console.log('log initial state, in store.js:', store.getState())

export default store;
