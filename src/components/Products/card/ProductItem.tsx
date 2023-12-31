import React, {memo} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as PropTypes from "prop-types";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {removeItem} from "../../../store/Product";
import {useDispatch} from "react-redux";

interface ProductItemProps {
    item: {
        id: number,
        title: string,
        description: string,
        image: string,
    };
    index: number;
    navigation: NavigationProp<ReactNavigation.RootParamList>,
}

export const ProductItem = memo((props: ProductItemProps) => {
    const itemDesc = props?.item?.description?.length > 70 ? props?.item?.description?.slice(0, 70) + '...' : props?.item?.description;
    const itemName = props?.item?.title?.length > 30 ? props?.item?.title?.slice(0, 30) + '...' : props?.item?.title
    const itemImage = props?.item?.image;
    const dispatch = useDispatch();
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container}
            onPress={() => {
                // @ts-ignore
                props.navigation.navigate('Details', {item: props.item})
            }}
        >
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.deleteIcon}
                onPress={() => dispatch(removeItem(props?.item?.id))}>
                <Ionicons name={'trash-outline'} size={20} color={'#ff6666'}/>
            </TouchableOpacity>
            <Image source={{uri: itemImage}} resizeMode={'contain'} style={styles.image}/>
            <Text style={styles.title}>{itemName}</Text>
        </TouchableOpacity>
    );
})

const styles = StyleSheet.create({
    container: {
        margin: "3%",
        paddingHorizontal: 15,
        // elevation: 7,
        alignItems: "center",
        maxWidth: "44%",
        rowGap: 10,
        flex: 1,
        borderRadius: 25,
        elevation: 5,
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowColor: '#000',
        // borderColor: colors.black, borderWidth: 1,
        backgroundColor: 'white'
    },
    image: {
        marginTop: 10,
        width: 120,
        height: 120,

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
    deleteIcon: {
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 1000,
        backgroundColor: '#dedede',
        borderRadius: 10,
        padding: 5,
        opacity: 0.8,
    }
})
