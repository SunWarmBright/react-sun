//创建store  引入reducer
import {combineReducers,createStore,applyMiddleware} from 'redux';
import reducer1 from './reduxmethod/reducer1';
import reducer2 from './reduxmethod/reducer2';

import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

const store = createStore(combineReducers({
    r1:reducer1,
    r2:reducer2
}),applyMiddleware(reduxLogger, reduxThunk, reduxPromise));
export default store;