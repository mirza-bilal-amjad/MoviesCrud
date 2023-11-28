import React, {useState} from "react";
import {Modal, TextInput, TouchableOpacity, View, Text, StyleSheet} from "react-native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";

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
        onClose();
    }

    return (
        <Modal visible={isVisible} animationType="slide" transparent onRequestClose={onClose}>
            <View style={{flex: 1, justifyContent: 'flex-end', backgroundColor: 'transparent'}}>
                <View style={{
                    // alignItems: 'center',
                    paddingHorizontal: "7.5%",
                    minHeight: 350,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    backgroundColor: '#1c2028',
                    padding: 50,
                    elevation: 7,
                }}>

                    <View style={styles.tiCont}>
                        <Ionicons style={{paddingRight: 5}} name={'person-circle-outline'} color={'black'}
                                  size={25}/>
                        <TextInput placeholderTextColor={'black'} value={title} textContentType='name'
                                   keyboardType='default' autoCapitalize='none' autoComplete={"name"}
                                   style={styles.textInput} placeholder='Name' cursorColor={'black'}
                                   selectionColor={'gray'}
                                   onChangeText={(value) => setTitle(value)}></TextInput>
                    </View>
                    {titleError ? <Text style={styles.error}>{titleError}</Text> : <Text> </Text>}

                    <View style={styles.tiCont}>
                        <Ionicons style={{paddingRight: 5}} name='barcode-outline' color={'black'}
                                  size={25}></Ionicons>
                        <TextInput placeholderTextColor={'black'} value={description} textContentType='nickname'
                                   keyboardType='default'
                                   secureTextEntry={true}
                                   autoComplete={"postal-code"}
                                   autoCapitalize='none' style={styles.textInput} cursorColor={'black'}
                                   selectionColor={'gray'}
                                   placeholder='Order id'
                                   onChangeText={(value) => setDescription(value)}></TextInput>
                    </View>
                    {descriptionError ? <Text style={styles.error}>{descriptionError}</Text> : <Text> </Text>}

                    <View style={{flexDirection: "row-reverse", justifyContent: 'space-between',}}>

                        <TouchableOpacity style={{
                            padding: 15,
                            minWidth: 100,
                            backgroundColor: 'gray',
                            alignItems: 'center',
                            borderRadius: 35,
                            borderColor: '#fefefe',
                            borderWidth: 3,
                            elevation: 7,
                            shadowColor: 'black',
                        }} onPress={handleSubmit} activeOpacity={0.87}>
                            <Text style={{color: 'black', fontSize: 15, fontWeight: '700'}}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            padding: 15,
                            minWidth: 100,
                            backgroundColor: 'gray',
                            alignItems: 'center',
                            borderRadius: 35,
                            borderColor: 'gray',
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
        borderRadius: 20,
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