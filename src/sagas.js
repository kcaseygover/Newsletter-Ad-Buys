import { call, put, take, fork, cancel } from 'redux-saga/effects';

import { saveAdBuyError, saveAdBuySuccess } from './actions/index';
import { saveState, loadState } from '../localStorage.js';
import store from './store';

export function* attemptSaveAd() {
  try {
    console.log('in saga attemptSaveAd', 'getState??', store.getState())
    yield saveState(store.getState())
    // yield loadState(store.getState())
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
}
