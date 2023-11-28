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
                position: 'relative',

            }}>
                <BigImage
                    title={item?.title}
                    source={{uri: item?.image}}
                    description={item?.description}
                    sourceBig={{uri: item.image}}
                    image1Style={{
                        width: '100%',
                        height: 300,
                        resizeMode: 'center',
                        backgroundColor: 'white',
                        borderBottomRightRadius: 30,
                        borderBottomLeftRadius: 30,
                    }}
                    image2Style={{
                        width: 100,
                        height: 160,
                        left: 10,
                        borderRadius: 10,
                        resizeMode: 'contain',
                    }}
                    style={{
                        width: '100%',
                        backgroundColor: '#555',
                    }}/>
            </View>
            <Text
                style={{color: '#fff', margin: 10, fontSize: 16, fontWeight: 'bold',}}>Description</Text>
            <Text
                style={{
                    color: '#fff',
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
        flex: 1, backgroundColor: "#555",
        paddingBottom: 10,
    },
    image: {
        width: '100%',
        height: 300,
        opacity: 0.9,
    },

})