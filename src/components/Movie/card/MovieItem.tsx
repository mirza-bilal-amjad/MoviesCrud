import React, {memo} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as PropTypes from "prop-types";
import {API_BASE_URL2, instance2} from "../../../constants/constants";

interface MovieItemProps {
    item: {
        id: number,
        title: string,
        description: string,
        image: string,
        rating?: string,
    };
    navigation: any,
}

export const MovieItem = memo((props: MovieItemProps) => {
    const itemDesc = props?.item?.description?.length > 70 ? props?.item?.description?.slice(0, 70) + '...' : props?.item?.description;
    const itemName = props?.item?.title;
    const itemImage = props?.item?.image;
    return <TouchableOpacity onPress={
        () => {
            // @ts-ignore
            props.navigation.navigate('Details', {item: props.item})
        }
    } activeOpacity={
        0.7
    } style={styles.container}>
        <Image source={{uri: itemImage}} style={styles.image}/>
        <Text style={styles.title}>{itemName}</Text>
        <Text style={styles.description}>IMDB: {props.item.rating}</Text>
        {/*<Text style={styles.description}>{itemDesc}</Text>*/}
    </TouchableOpacity>;
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        justifyContent: "center",
        shadowColor: "#000",
        borderRadius: 15,
    },
    image: {
        width: 190,
        height: 260,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    title: {
        marginLeft: 5,
        fontSize: 13,
        fontWeight: "500",
        color: "#fff",
        // textAlign: "center",
        marginTop: 5,
        // marginBottom: 5,
    },
    description: {
        marginLeft: 5,
        fontSize: 12,
        fontWeight: "400",
        color: "#bebebe",
        // textAlign: "center",
    },
})