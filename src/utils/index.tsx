import * as ImagePicker from 'expo-image-picker';

export const pickImage = async () => {
    try {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });

        if (!result?.canceled) {
            return result?.assets[0]?.uri.toString()
        }
    } catch (error) {
        console.error('Error picking an image:', error);
    }
};

export const takePicture = async () => {
    try {
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });
        if (!result.canceled) {
            console.log(
                result?.assets[0]?.uri
            )
            return result?.assets[0]?.uri;

        }
    } catch (error) {
        console.error('Error taking a picture:', error);
    }
}

export const generateRandomChar = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const randomIndex = Math.floor(Math.random() * chars.length);
    return chars[randomIndex];
};

export const generateID = () => {
    let id = "";
    for (let i = 0; i < 7; i++) {
        id += generateRandomChar();
    }
    return id;
};