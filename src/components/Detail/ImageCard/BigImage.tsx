import {Image, ImageStyle, StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native'
import React from 'react'
import {MaterialIcons} from "@expo/vector-icons";

interface ImageProps {
    style?: StyleProp<ViewStyle>,
    image1Style?: StyleProp<ImageStyle>,
    image2Style?: StyleProp<ImageStyle>,
    sourceBig?: any,
    source: any,
    resizeMode?: any,
    title?: string,
    rating?: string,
    releaseDate?: number | string,
    description?: string,


}

const BigImage = (props: ImageProps) => {
    return (
        <View style={props.style}>

            <View style={{height: 10}}/>
        </View>
    )
}
export default BigImage
const styles = StyleSheet.create({})
