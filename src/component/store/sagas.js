import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_DATA } from './actionTypes';
import  { initDataAction } from './actionCreators';
import axios from 'axios';

function* getInitData() {

    try {
        const res =  yield axios.get('/api/initData.json');
        console.log('saga---------------');
        console.log(res.data);
        const action = initDataAction(res.data);
        yield put(action);
    } catch(e) {
        console.log('异步请求失败', e)
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_DATA, getInitData);
}

export default mySaga;
