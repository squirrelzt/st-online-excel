import  { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from '../component/store';

const reducer = combineReducers({
    header: headerReducer
});

export default reducer;
