import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {ProductList} from "../../components/Products/ProductList";
import {ProductItem} from "../../components/Products/card/ProductItem";

import {useProductsApi} from "../../hooks/useProductsApi";
import {useNavigation} from "@react-navigation/native";
import {MovieList} from "../../components/Movie/MovieList";
import {useMovieApi} from "../../hooks/useMovieApi";
import {MovieItem} from "../../components/Movie/card/MovieItem";
import {MaterialIcons} from "@expo/vector-icons";
import BottomPopUp from "../../components/BottomPopUp/BottomPopUp";

const Home = () => {
    const navigation = useNavigation();
    const [apiData, setApiData] = useState([])
    const [isVisible, setIsVisible] = useState(false);
    const {data, isPending, error} = useProductsApi();

    // const {data, isPending, error} = useMovieApi();


    useEffect(() => {
        setApiData(data);
    }, [data]);

    return (
        <SafeAreaView style={styles.container}>
            <ProductList data={apiData} isPending={isPending} error={error}
                         renderItem={({item, index}) => <ProductItem index={index} navigation={navigation}
                                                                     item={item}/>}/>
            <TouchableOpacity
                onPress={() => setIsVisible(true)}
                activeOpacity={0.7} style={{
                backgroundColor: '#bcd70c',
                height: 55,
                width: 55,
                right: 20,
                position: 'absolute',
                bottom: 35,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <MaterialIcons name="add" size={30} color="#000"/>
            </TouchableOpacity>
            <BottomPopUp isVisible={isVisible} onSubmit={() => {
            }} onClose={() => setIsVisible(false)}/>
        </SafeAreaView>
    );
}
export default Home
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dedede",
        paddingBottom: 10,
    }
})
