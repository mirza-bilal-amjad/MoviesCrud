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


}

const BigImage = (props: ImageProps) => {
    return (
        <View style={props.style}>
            <Image source={props.sourceBig} style={props.image1Style} resizeMode={props.resizeMode}/>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image source={props.source} style={props.image2Style} resizeMode={props.resizeMode}/>
                <View style={{height: 90,}}>

                    <Text
                        style={{color: '#fff', fontSize: 15, fontWeight: 'bold', marginLeft: 20, marginTop: 65, justifyContent: 'center'}}>{props?.title}</Text>
                    <View style={{marginLeft: 20, marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialIcons
                            name={'star'} size={13} color={'#bcd70c'}/>
                        <Text
                            style={{color: '#bcd70c', fontSize: 13, fontWeight: '400', marginLeft: 5, marginTop: -3}}>{props?.rating}</Text>
                        <View
                            style={{width: 5, height: 5, borderRadius: 50, backgroundColor: 'gray', marginHorizontal: 10}}></View>
                        <Text
                            style={{color: '#fff', fontSize: 13, fontWeight: '500', marginTop: -3}}>{props?.releaseDate}</Text>
                    </View>
                </View>

            </View>

        </View>
    )
}
export default BigImage
const styles = StyleSheet.create({})
