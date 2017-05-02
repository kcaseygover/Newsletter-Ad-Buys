// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

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

export default function* mySaga() {
  console.log('Hello Sagas!')
}
