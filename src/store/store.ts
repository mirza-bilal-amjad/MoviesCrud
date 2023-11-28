import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import ProductReducer from "./Product";

const rootReducer = combineReducers({
    counter: ProductReducer,
});


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
