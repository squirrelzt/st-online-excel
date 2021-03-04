import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from "immutable";
import {GET_INIT_DATA} from "./actionTypes";

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            dispatch(changeList(res.data.data))
        }).catch(() => {
            console.log('error');
        });
    }
};

export const getInitDataAction = () => ({
    type: actionTypes.GET_INIT_DATA
});

export const initDataAction = (data) => ({
    type: actionTypes.INIT_DATA,
    data: data
});
