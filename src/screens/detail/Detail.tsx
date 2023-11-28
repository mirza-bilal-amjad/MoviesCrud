import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native'
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
            <Header left={'arrow-back-ios'} middle={''} right={''}/>

            <BigImage
                title={item?.title}
                source={{uri: item?.image}}

                sourceBig={{uri: item.image}}
                image1Style={{
                    width: '100%',
                    height: 300,
                    resizeMode: 'contain',
                }}
                image2Style={{
                    width: 90,
                    aspectRatio: 9 / 14,
                    left: 10,
                    borderRadius: 10,
                    resizeMode: 'contain',
                }}
                style={{
                    width: '100%',
                    position: 'absolute',
                }}/>

            <Text
                style={{color: '#fff', fontSize: 16, fontWeight: 'bold', margin: 10, marginTop: 420}}>Description</Text>
            <Text
                style={{
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: '400',
                    marginHorizontal: 10
                }}>{item?.description}</Text>
        </SafeAreaView>
    );
}
export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#1c2028",
        paddingBottom: 10,
    },
    image: {
        width: '100%',
        height: 300,
        opacity: 0.9,
    },

})