import { applyMiddleware, combineReducers, createStore } from "redux";
import countReducer from './ducks/count';
import createSagaMiddleware from 'redux-saga';
import userReducer from './ducks/user'
import { watchersaga } from "./sagas/rootsaga";


const reducer = combineReducers({
    counter:countReducer,
    user:userReducer
})

const sagamiddleware = createSagaMiddleware()
const middleware = [sagamiddleware]
const store = createStore(reducer,{},applyMiddleware(...middleware))

sagamiddleware.run(watchersaga)

export default store;