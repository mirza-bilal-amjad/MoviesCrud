import React, {memo} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as PropTypes from "prop-types";
import {NavigationProp, useNavigation} from "@react-navigation/native";

interface ProductItemProps {
    item: {
        id: number,
        title: string,
        description: string,
        image: string,
    };
    navigation: NavigationProp<ReactNavigation.RootParamList>,
}

export const ProductItem = memo((props: ProductItemProps) => {
    const itemDesc = props?.item?.description?.length > 70 ? props?.item?.description?.slice(0, 70) + '...' : props?.item?.description;
    const itemName = props?.item?.title;
    const itemImage = props?.item?.image;

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container}
            onPress={() => {
                // @ts-ignore
                props.navigation.navigate('Details', {item: props.item})
            }}
        >
            <Image source={{uri: itemImage}} style={styles.image}/>
            <Text style={styles.title}>{itemName}</Text>
            {/*<Text style={styles.description}>{itemDesc}</Text>*/}
        </TouchableOpacity>
    );
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        padding: 10,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: "contain",
    },
    title: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
    },
})