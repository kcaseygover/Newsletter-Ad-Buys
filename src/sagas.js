import { call, put, take, fork, cancel, takeEvery } from 'redux-saga/effects';

import {
  saveAdBuyError,
  saveAdBuySuccess,
  deleteRowSuccess,
  deleteRowError,
  clearTableSuccess,
  clearTableError
} from './actions/index';

import { saveState, loadState } from '../localStorage.js';
import store from './store';

export function* attemptSaveAd() {
  try {
    console.log('in saga attemptSaveAd', 'getState??', store.getState())
    yield saveState(store.getState())
    yield put(saveAdBuySuccess())
  } catch (e) {
    yield put(saveAdBuyError(e))
  }
}

export function* attemptDeleteRow(action) {
  // var rows = loadState();
  // console.log('in del reducer', rows, action)
  // for(var i = 0; i < rows.length; i++){
  //   console.log('in loop', rows[i].dateAdded)
    // if (rows[i].dateAdded === action.dateAdded){
    //   rows.splice(rows, 1);
    //   console.log('after splice', rows)
    //   // saveState(rows);
    // }
  //}
  try {
    // yield saveState(store.getState())
    yield put(deleteRowSuccess())
  } catch (e) {
    yield put(deleteRowError(e))
  }
}

export function* attemptClearTable() {

  console.log('attemptclearTable saga')
  try {
    yield localStorage.removeItem('ad');
    yield put(clearTableSuccess());


  } catch (e) {
    yield put(clearTableError(e));
  }
}

export function* saveAdWatcher() {
  console.log('in saga save watcher')
  while (yield take('SAVE_AD_BUY')) {
    yield call(attemptSaveAd)
  }
}

export function* deleteRowWatcher() {
  console.log('in delete watcher')
  while (yield take('DELETE_ROW')) {
    yield call(attemptDeleteRow)
  }
}

export function* clearTableWatcher() {
  console.log('in clearTable watcher')
  while (yield take('CLEAR_TABLE')) {
    yield call(attemptClearTable)
  }
}

export default function* mySaga() {
  console.log('Hello Sagas!')
  yield [
    fork(saveAdWatcher),
    fork(deleteRowWatcher),
    fork(clearTableWatcher),
  ];
  // yield take('SAVE_AD_BUY_SUCCESS');
  // const watcherDeleteRow = yield fork(deleteRowWatcher);
  // yield take('DELETE_ROW_SUCCESS')

}
