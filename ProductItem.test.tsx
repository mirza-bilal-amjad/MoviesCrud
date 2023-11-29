import {addProductItem, removeItem, setData, productReducer} from './src/store/Product'; // Replace 'yourReducerFile' with the actual file path

describe('productReducer', () => {

    it('should handle setData', () => {
        const initialState = {
            data: [],
        };

        const action = setData([{id: 1, title: 'Product 1', image: 'test image', description: 'test description'}, {id: 2, title: 'Product 2', image: 'test image', description: 'test description'}]);

        const nextState = productReducer(initialState, action);

        expect(nextState).toEqual({
            data: [{id: 1, title: 'Product 1', image: 'test image', description: 'test description'}, {id: 2, title: 'Product 2', image: 'test image', description: 'test description'}],
        });
    });

    it('should handle addProductItem when item is not in the list', () => {
        const initialState = {
            data: [{id: 1, title: 'Product 1', image: 'test image', description: 'test description'}],
        };

        const action = addProductItem([{id: 2, title: 'Product 2', image: 'test image', description: 'test description'}]);

        const nextState = productReducer(initialState, action);

        expect(nextState).toEqual({
            data: [{id: 1, title: 'Product 1', image: 'test image', description: 'test description'}, {id: 2, title: 'Product 2', image: 'test image', description: 'test description'}],
        });
    });

    it('should not addProductItem when item is already in the list', () => {
        const initialState = {
            data: [{id: 1, title: 'Product 1', image: 'test image', description: 'test description'}, {id: 2, title: 'Product 2', image: 'test image', description: 'test description'}],
        };

        const action = addProductItem([{id: 2, title: 'Product 2', image: 'test image', description: 'test description'}]);

        const nextState = productReducer(initialState, action);

        expect(nextState).toEqual({
            data: [{id: 1, title: 'Product 1', image: 'test image', description: 'test description'}, {id: 2, title: 'Product 2', image: 'test image', description: 'test description'}],
        });
    });

    it('should handle removeItem', () => {
        const initialState = {
            data: [{id: 1, title: 'Product 1', image: 'test image', description: 'test description'}, {id: 2, title: 'Product 2', image: 'test image', description: 'test description'}],
        };

        const action = removeItem(1);

        const nextState = productReducer(initialState, action);

        expect(nextState).toEqual({
            data: [{id: 2, title: 'Product 2', image: 'test image', description: 'test description'}],
        });
    });
});
