import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {productReducer} from "./Product";

const reducers = combineReducers({
    productReducer,
});


const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});


setupListeners(store.dispatch);

export default store;
