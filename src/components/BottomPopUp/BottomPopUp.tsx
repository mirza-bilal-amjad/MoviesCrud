import React, {useEffect, useState} from "react";
import {Modal, TextInput, TouchableOpacity, View, Text, StyleSheet, Button} from "react-native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {pickImage, takePicture} from "../../utils";
import * as ImagePicker from 'expo-image-picker';

interface BottomPopUpProps {
    isVisible: boolean,
    onClose: any,
    onSubmit: any,
}

const BottomPopup = ({isVisible, onClose, onSubmit}: BottomPopUpProps) => {
    const [title, setTitle] = useState(null);
    const [titleError, setTitleError] = useState(null);
    const [description, setDescription] = useState(null);
    const [descriptionError, setDescriptionError] = useState(null);
    const [image, setImage] = useState(null);


    function handleSubmit() {

    }

    const close = () => {
        setTitle('');
        setDescription('');

        onClose();
    }

    useEffect(() => {
        (async () => {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access media library was denied!');
            }
        })();
    }, []);

    return (
        <Modal visible={isVisible} animationType="slide" transparent onRequestClose={onClose}>
            <View style={{flex: 1, justifyContent: 'flex-end', backgroundColor: 'transparent'}}>
                <View style={{
                    paddingHorizontal: "7.5%",
                    minHeight: 350,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    backgroundColor: '#fff',
                    padding: 50,
                    elevation: 7,
                }}>

                    <View style={[styles.tiCont, {
                        height: 45,
                    }]}>
                        <Ionicons style={{paddingRight: 5}} name={'person-circle-outline'} color={'black'}
                                  size={25}/>
                        <TextInput placeholderTextColor={'black'} value={title} textContentType='name'
                                   keyboardType='default' autoCapitalize='none' autoComplete={"name"}
                                   style={styles.textInput} placeholder='Title' cursorColor={'black'}
                                   selectionColor={'gray'}
                                   onChangeText={(value) => setTitle(value)}></TextInput>
                    </View>
                    {titleError ? <Text style={styles.error}>{titleError}</Text> : <Text> </Text>}

                    <View style={[styles.tiCont, {
                        minHeight: 45,
                        maxHeight: 130,
                    }]}>
                        <Ionicons style={{paddingRight: 5}} name='barcode-outline' color={'black'}
                                  size={25}></Ionicons>
                        <TextInput placeholderTextColor={'black'}
                                   multiline={true}
                                   value={description} textContentType='nickname'
                                   keyboardType='default'
                                   secureTextEntry={true}
                                   autoComplete={"postal-code"}
                                   autoCapitalize='none' style={styles.textInput} cursorColor={'black'}
                                   selectionColor={'gray'}
                                   placeholder='Description'
                                   onChangeText={(value) => setDescription(value)}></TextInput>
                    </View>
                    {descriptionError ? <Text style={styles.error}>{descriptionError}</Text> : <Text> </Text>}
                    <TouchableOpacity  onPress={() => pickImage()}>
                        <Text>
                            Take a picture
                        </Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: "row-reverse", top: 10, justifyContent: 'space-between',}}>

                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            height: 50,
                            minWidth: 100,
                            backgroundColor: '#dedede',
                            alignItems: 'center',
                            borderRadius: 35,
                            borderColor: 'white',
                            borderWidth: 3,
                            elevation: 7,
                            shadowColor: 'black',
                        }} onPress={handleSubmit} activeOpacity={0.87}>
                            <Text style={{color: 'black', fontSize: 15, fontWeight: '700'}}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            height: 50,
                            minWidth: 100,
                            backgroundColor: '#dedede',
                            alignItems: 'center',
                            borderRadius: 35,
                            borderColor: 'white',
                            borderWidth: 3,
                            elevation: 7,
                            shadowColor: 'black',
                        }} onPress={close} activeOpacity={0.87}>
                            <Text style={{color: 'black', fontSize: 15, fontWeight: '700'}}>Cancel</Text>
                        </TouchableOpacity>


                    </View>
                </View>
            </View>
        </Modal>
    );
};
export default BottomPopup

const styles = StyleSheet.create({
    tiCont: {
        flexDirection: 'row',
        alignItems: 'center',
        // width: 350,
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: 'gray',
        borderRadius: 10,
        elevation: 7,
        borderColor: 'gray',
        borderWidth: 3,
    },
    textInput: {

        fontSize: 18,
        color: 'black',
        fontWeight: '500',
        width: "92%",

        // , backgroundColor: '#fff',
    },
    error: {
        marginBottom: 7,
        color: 'red',
        padding: 4,
        fontWeight: '600',
        textAlign: "left",

    }

})