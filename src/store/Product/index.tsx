import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
    data: []
}

export const productSliceReducer = createSlice({
    name: 'productSliceReducer',
    initialState,
    reducers: {
        addProductItem: (state, action) => {
            if (state.data && !state.data.includes(action.payload)) {
                state.data.push(...action.payload)
            } else
                return state.data;
        },
        removeItem: (state, action) => {
            state.data = state.data.filter((item: any, index: number) => item.id !== action.payload)
        }
    },
});

export const {addProductItem, removeItem} = productSliceReducer.actions;

export const productReducer = productSliceReducer.reducer;
