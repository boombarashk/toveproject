import { all } from 'redux-saga/effects';
import {call, put, takeLatest} from "@redux-saga/core/effects";

import {FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure} from './actions/request'

function* fetchData(action) {
    const {url, key} = action.payload
    try {
        const response = yield call(fetch, url);
        const {data} = yield response.json();
        yield put(fetchDataSuccess({data, key}));
    } catch (error) {
        yield put(fetchDataFailure(error));
    }
}

function* watchFetchData() {
    yield takeLatest(FETCH_DATA_REQUEST, fetchData);
}

function* rootSaga() {
    yield all([
        watchFetchData(),
    ]);
}

export default rootSaga;
