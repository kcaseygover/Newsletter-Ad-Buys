import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import appReducer from './reducers';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(mySaga);

export default store;
