import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
// @ts-ignore
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {useNavigation} from "@react-navigation/native";

interface HeaderProps {
    left?: any,
    middle?: any,
    right?: any,
}

const Header = (props: HeaderProps) => {
    const navigation = useNavigation();
    return (
        <View style={{
            position: 'relative',
            backgroundColor: 'transparent',
            width: '100%',
            height: 40,
            zIndex: 100,
        }}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={{
                    position: 'absolute',
                    height: 40,
                    left: 15, zIndex: 100,
                    justifyContent: 'center',
                }}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <MaterialIcons name={props.left} size={30} color="#bcd70c"/>
            </TouchableOpacity>
            <View style={{
                position: 'absolute',
                width: '100%',
                height: 40,
                justifyContent: 'center',
                alignItems: 'flex-start',
                left: 40
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                }}>{props.middle}</Text>
            </View>
            {/*<TouchableOpacity activeOpacity={0.7} style={{
                position: 'absolute',
                width: '100%',
                height: 40,
                justifyContent: 'center',
                alignItems: 'flex-end',
                right: 15, zIndex: 100,

            }}>
                <MaterialIcons name="arrow-back-ios" size={30} color="#000"/>
            </TouchableOpacity>*/}

        </View>
    );
}
export default Header
const styles = StyleSheet.create({})
