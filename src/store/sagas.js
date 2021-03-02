import { put, takeEvery } from 'redux-saga/effects'
// import { GET_INIT_LIST } from './actionTypes';
// import { initListAction } from './actionCreators';
import axios from 'axios';

function* getInitList() {
    try {
        const res =  yield axios.get('http://127.0.0.1:8888/api/todolist');
        // const action = initListAction(res.data);
        // yield put(action);
    } catch(e) {
        console.log('异步请求失败')
    }
}

function* mySaga() {
    // yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
