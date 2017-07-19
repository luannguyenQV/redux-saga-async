import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import { increase } from './reducer'

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery(increase.toString(), incrementAsync)
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ])
}
