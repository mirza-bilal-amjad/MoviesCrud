
import { ADD_PRODUCT, REMOVE_PRODUCT } from "./constants";


const initialState = { count: 0 };
const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, count: state.count + 1 };
        case REMOVE_PRODUCT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

export default ProductReducer;
