import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Home from '../src/screens/home/Home';

// Mock the useProductsApi hook
jest.mock('../src/hooks/useProductsApi', () => ({
    useProductsApi: jest.fn(() => ({ data: [], isPending: false, error: null })),
}));

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(() => ({ navigate: jest.fn() })),
}));

describe('<Home />', () => {
    it('renders without crashing', async () => {
        render(<Home />);
        // Add any necessary assertions based on your component structure
    });

    it('displays product list when data is available', async () => {
        const mockData = [
            { id: 1, name: 'Product 1' },
            { id: 2, name: 'Product 2' },
        ];

        jest.spyOn(require('../src/hooks/useProductsApi'), 'useProductsApi')
            .mockImplementation(() => ({ data: mockData, isPending: false, error: null }));

        const { getByText } = render(<Home />);

        await waitFor(() => {
            expect(getByText('Product 1')).toBeTruthy();
            expect(getByText('Product 2')).toBeTruthy();
        });
    });

    it('displays error message when there is an error fetching data', async () => {
        jest.spyOn(require('../src/hooks/useProductsApi'), 'useProductsApi')
            .mockImplementation(() => ({ data: [], isPending: false, error: 'Error fetching data' }));

        const { getByText } = render(<Home />);

        await waitFor(() => {
            expect(getByText('Error fetching data')).toBeTruthy();
        });
    });

    // Add more test cases based on your component logic
});
