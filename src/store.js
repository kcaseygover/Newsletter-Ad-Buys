import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { saveState, loadState } from '../localStorage.js';
import appReducer from './reducers';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// const persistedState = loadState();

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
  // persistedState,
);

sagaMiddleware.run(mySaga);

// Log the initial state
console.log('log initial state, in store.js:', JSON.stringify(store.getState().publisher), store.getState())
// console.log("persistedState", persistedState)

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe =
store.subscribe(() =>
{
  console.log('in store.js, state change? ', store.getState())
  // saveState(store.getState())
}
  // localStorage.setItem('reduxState', JSON.stringify(store.getState()))
)

// Dispatch some actions


// Stop listening to state updates
// unsubscribe();

export default store;
