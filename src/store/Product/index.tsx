import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
    data: []
}

export const productSliceReducer = createSlice({
    name: 'productSliceReducer',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        addProductItem: (state, action) => {
            const exists = state.data.some(item => item.id === action.payload[0].id);
            console.log(exists)
            if (state.data && !exists) {
                state.data.push(...action.payload)
            } else
                return state;
        },
        removeItem: (state, action) => {
            state.data = state.data.filter((item: any, index: number) => item.id !== action.payload)
        }
    },
});

export const {addProductItem, removeItem, setData} = productSliceReducer.actions;

export const productReducer = productSliceReducer.reducer;
