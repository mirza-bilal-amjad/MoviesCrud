import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

const mockImagePicker = {
    requestMediaLibraryPermissionsAsync: jest.fn(() => ({ status: 'granted' })),
    requestCameraPermissionsAsync: jest.fn(() => ({ status: 'granted' })),
};

const mockStatusBar = {
    StatusBar: jest.fn(),
};

module.exports = { mockImagePicker, mockStatusBar };
