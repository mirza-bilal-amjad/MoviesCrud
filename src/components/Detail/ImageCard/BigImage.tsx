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
            <Image source={props.sourceBig} style={props.image1Style} resizeMode={props.resizeMode}/>

            <Text
                style={{
                    color: '#fff', fontSize: 15, fontWeight: 'bold',
                    width: '70%', marginLeft: 10, marginTop: 20,
                }}>{props?.title}</Text>


        </View>
    )
}
export default BigImage
const styles = StyleSheet.create({})
