import {View, Text, SafeAreaView, StyleSheet, Image, StatusBar} from 'react-native'
import React from 'react'
import BigImage from "../../components/Detail/ImageCard/BigImage";
import Header from "../../components/Header/Header";

interface DetailProps {

    route: {
        params: {
            item: {
                id: number,
                title: string,
                description: string,
                image: string,
            }
        }
    }
}

const Detail = (props: DetailProps) => {
    const item = props?.route?.params?.item;
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} animated translucent/>
            <Header left={'arrow-back-ios'} middle={''} right={''}/>
            <View style={{
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomRightRadius: 25,
                borderBottomLeftRadius: 25,
                padding: 20,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowColor: '#000',
                shadowOpacity: 0.5,
                shadowRadius: 5,
            }}>
                <Image source={{
                    uri: item?.image,
                }} style={{
                    width: '100%',
                    height: 250,

                }} resizeMode={'contain'}/>
            </View>
            <Text
                style={{
                    color: '#000', fontSize: 15, fontWeight: '700',
                    width: '90%', marginLeft: 10, marginTop: 20,
                }}>{item?.title}</Text>
            <Text
                style={{color: '#000', margin: 10, fontSize: 16, fontWeight: 'bold',}}>Description</Text>
            <Text
                style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: '400',
                    marginHorizontal: 10
                }}>{item?.description}</Text>
        </SafeAreaView>
    )
        ;
}
export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#fff",
        paddingBottom: 10,
    },
    image: {
        width: '100%',
        height: 300,
        opacity: 0.9,
    },

})
