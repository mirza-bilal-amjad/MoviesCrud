import React, {useEffect, useState} from "react";
import {
    Modal,
    TextInput,
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    KeyboardAvoidingView, Platform, TouchableWithoutFeedback
} from "react-native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {generateID, pickImage, takePicture} from "../../utils";
import * as ImagePicker from 'expo-image-picker';
import {useDispatch} from "react-redux";
import {addProductItem} from "../../store/Product";
import uuid from 'uuid'
import * as url from "url";

interface BottomPopUpProps {
    isVisible: boolean,
    onClose: any,
    onSubmit: any,
}

interface SubmitProps {
    title: string,
    description: string,
    image: {
        _j: string,
    },
}

const BottomPopup = ({isVisible, onClose, onSubmit}: BottomPopUpProps) => {
    const [title, setTitle] = useState(null);
    const [titleError, setTitleError] = useState(null);
    const [description, setDescription] = useState(null);
    const [descriptionError, setDescriptionError] = useState(null);
    const [image, setImage] = useState(null);
    const [imageError, setImageError] = useState(null);
    const dispatch = useDispatch();


    const handleSubmit = (props: SubmitProps) => {
        const image = props.image?._j;
        console.log(image);

        if (props.title === null || props.title === '') {
            setTitleError('Title is required');
            return;
        } else {
            setTitleError(null);
        }
        if (props.description === null || props.description === '') {
            setDescriptionError('Description is required');
            return;
        } else {
            setDescriptionError(null)
        }
        if (!image) {
            setImageError('Image is required');
            return;
        } else {
            setImageError(null)
        }

        const data = [{
            id: generateID(),
            title: props.title,
            description: props.description,
            image: props.image?._j,
        }]
        dispatch(addProductItem(data))

        setTitle(null);
        setDescription(null);
        setImage(null)
        onClose();
    }

    const close = () => {
        setTitle('');
        setDescription('');
        setImage(null)
        onClose();
    }

    useEffect(() => {

    }, []);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}

        >

            <Modal
                visible={isVisible}
                animationType="slide"
                transparent
                onRequestClose={onClose}

            >
                <TouchableWithoutFeedback onPress={close}>
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
                            {!image ? <TouchableOpacity onPress={() => {
                                    setImage(
                                        takePicture()
                                    );
                                }}
                                                        style={{
                                                            justifyContent: 'center',
                                                            height: 50,
                                                            alignItems: 'center',
                                                            borderTopLeftRadius: 15,
                                                            borderTopRightRadius: 15,
                                                            overflow: 'hidden',
                                                            backgroundColor: '#dedede',
                                                            borderWidth: .2,
                                                        }}
                                >
                                    <Ionicons name={'camera-outline'} color={'black'} size={25}/>
                                </TouchableOpacity> :
                                <View style={{
                                    height: 50,
                                    backgroundColor: '#dedede',
                                    overflow: 'hidden',
                                    borderTopLeftRadius: 15,
                                    borderTopRightRadius: 15,
                                    borderWidth: .2,
                                }}><Image source={{uri: image?._j}} style={{
                                    width: '100%', aspectRatio: 16 / 9,
                                    resizeMode: 'cover', alignSelf: 'center'
                                }}/></View>
                            }
                            <TouchableOpacity onPress={() => {
                                setImage(
                                    pickImage()
                                );
                            }}
                                              style={{
                                                  justifyContent: 'center',
                                                  height: 30,
                                                  alignItems: 'center',
                                                  borderBottomLeftRadius: 15,
                                                  borderBottomRightRadius: 15,
                                                  borderBottomWidth: 0.2,
                                                  borderLeftWidth: 0.2,
                                                  borderRightWidth: 0.2,
                                              }}
                            >
                                <Text style={{
                                    textDecorationLine: 'underline',
                                    textAlign: 'center',
                                }}>
                                    Take a picture
                                </Text>
                            </TouchableOpacity>
                            {imageError ? <Text style={styles.error}>{imageError}</Text> : <Text> </Text>}

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
                                }} onPress={() => handleSubmit(
                                    {
                                        title: title,
                                        description: description,
                                        image: image,
                                    }
                                )} activeOpacity={0.87}>
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
                </TouchableWithoutFeedback>
            </Modal>

        </KeyboardAvoidingView>

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
        backgroundColor: '#dedede',
        borderRadius: 10,
        elevation: 7,
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