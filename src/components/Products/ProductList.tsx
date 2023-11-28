import React, {memo} from "react";
import {FlatList, View, StyleSheet, ActivityIndicator} from "react-native";

interface ProductListProps {
    data: any,
    renderItem: any,
    isPending?: boolean,
    error?: any,
}

export const ProductList = memo((props: ProductListProps) => {
    return <View style={styles.container}>
        {props.isPending ?
            <ActivityIndicator size="large" color="#000" style={styles.container}/>
            : <FlatList numColumns={2} data={props.data} renderItem={props.renderItem}/>}
    </View>;
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingBottom: 10,
    }
});