import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk,sagaMiddleware)
);

// const store = createStore(reducer);

const store = createStore(
    reducer,
    enhancer
);

sagaMiddleware.run(todoSagas);

export default store;