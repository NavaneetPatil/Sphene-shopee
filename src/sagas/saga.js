import delay from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

function* A(){
    yield delay(4000);
    yield put({type:'USER_AUT',value:1})
}

export function watchageup(){
    yield takeEvery('PASS-RECEIVED', pass)
}