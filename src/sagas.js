import { call, put, take, fork, cancel } from 'redux-saga/effects';

import { saveAdBuyError, saveAdBuySuccess } from './actions/index';
import { saveState, loadState } from '../localStorage.js';
import store from './store';


// worker Saga: will be fired on _FETCH_REQUESTED actions
// function* fetchTable() {
  // try {
  //   const row = yield call()
  //   yield put({type: 'ROW_FETCHED', row: row})
  // } catch (e) {
  //   yield put({type: 'ROW_FETCH_FAILED', message: e.message});
  // }
// }

/*
  Starts fetch__ on each dispatched `_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
  // yield takeEvery('ROW_FETCHED', fetchTable);
// }

export function* attemptSaveAd() {
  try {
    console.log('in saga attemptSaveAd', 'getState??', store.getState())
    yield saveState(store.getState())
    yield put(saveAdBuySuccess())
  } catch (e) {
    yield put(saveAdBuyError(e))
  }
}

export function* saveAdWatcher() {
  console.log('in saga watcher')
  while (yield take('SAVE_AD_BUY')) {
    yield call(attemptSaveAd)
  }
}

export default function* mySaga() {
  console.log('Hello Sagas!')
  const watcher = yield fork(saveAdWatcher);

  yield take('SAVE_AD_BUY_SUCCESS');
  // yield cancel(watcher)
}
