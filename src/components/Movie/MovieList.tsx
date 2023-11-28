import React, {memo} from "react";
import {FlatList, View, StyleSheet, ActivityIndicator} from "react-native";

interface MovieListProps {
    data: any,
    renderItem: any,
    isPending?: boolean,
    error?: any,
}

export const MovieList = memo((props: MovieListProps) => {
    return <View style={styles.container}>
        {props.isPending ?
            <ActivityIndicator size="large" color="#fff" style={styles.container}/>
            : <FlatList initialNumToRender={10}
                        keyExtractor={(item, index) => index.toString()}
                        windowSize={20}
                        removeClippedSubviews={true}

                        numColumns={2} data={props.data} renderItem={props.renderItem}/>
        }
    </View>;
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
    }
});