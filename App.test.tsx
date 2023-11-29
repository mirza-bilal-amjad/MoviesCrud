import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import App from './App';
import renderer from 'react-test-renderer';
// Mock the ImagePicker module
jest.mock('expo-image-picker', () => ({
    requestMediaLibraryPermissionsAsync: jest.fn(() => ({ status: 'granted' })),
    requestCameraPermissionsAsync: jest.fn(() => ({ status: 'granted' })),
}));
// Mock the StatusBar module
jest.mock('expo-status-bar', () => ({
    StatusBar: jest.fn(),
}));
describe('<App />', () => {
    it('renders Correctly', ()=>{
        const tree =   renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('requests media library and camera permissions', async () => {
        render(<App />);
        // Wait for the asynchronous code to complete
        await waitFor(() => {
            expect(require('expo-image-picker').requestMediaLibraryPermissionsAsync).toHaveBeenCalled();
            expect(require('expo-image-picker').requestCameraPermissionsAsync).toHaveBeenCalled();
        });
    });
    // Add more test cases based on your application logic
});