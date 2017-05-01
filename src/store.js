import { createStore } from 'redux';
import  appReducer from './reducers';
import { changeCost } from './actions/index.js';

const store = createStore(appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// Log the initial state
console.log('log initial state, in store.js::::',store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log('in store.js, state change? ', store.getState())
)

// Dispatch some actions
store.dispatch(changeCost('Learn about actions'))

// Stop listening to state updates
unsubscribe();

export default store;
