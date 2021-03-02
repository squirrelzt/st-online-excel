import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_DATA } from './actionTypes';
import axios from 'axios';

function* getInitData() {

    try {
        const res =  yield axios.get('/api/initData.json');
        console.log(res)
        // const action = initListAction(res.data);
        // yield put(action);
    } catch(e) {
        console.log('异步请求失败')
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_DATA, getInitData);
}

export default mySaga;
