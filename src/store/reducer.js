import  { combineReducers } from "redux";
import { luckySheetReducer } from '../component/store';

const reducer = combineReducers({
    luckySheet: luckySheetReducer
});

export default reducer;
