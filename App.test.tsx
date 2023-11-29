import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import App from './App';

test('renders without crashing', async () => {
    render(<App />);

    // You can add more test cases or assertions as needed
});
