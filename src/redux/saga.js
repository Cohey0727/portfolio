import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* request(action) {
  try {
    yield put({ type: 'APP/EXCHANGE/READ/START' });
    const data = yield call(
      axios.get,
      'https://www.gaitameonline.com/rateaj/getrate'
    );
    yield put({ type: 'APP/EXCHANGE/READ/SUCCESS', payload: data });
  } catch (e) {
    yield put({ type: 'APP/EXCHANGE/READ/SUCCESS', message: e.message });
  }
}

function* saga() {
  yield takeEvery('APP/EXCHANGE/READ', request);
}

export default saga;
