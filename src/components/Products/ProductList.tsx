import React, {memo} from "react";
import {FlatList, View, StyleSheet, ActivityIndicator, RefreshControl} from "react-native";
import {useProductsApi} from "../../hooks/useProductsApi";

interface ProductListProps {
    data: any,
    renderItem: any,
    isPending?: boolean,
    error?: any,
}

export const ProductList = memo((props: ProductListProps) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const {fetchData} = useProductsApi();
    const handleRefresh = () => {
        setRefreshing(true);
        fetchData().then(() => {
            setRefreshing(false);
        });
    };
    return <View style={styles.container}>
        {props.isPending ?
            <ActivityIndicator size="large" color="#000" style={styles.container}/>
            : <FlatList
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>
                }
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                initialNumToRender={10}
                windowSize={20}
                data={props.data}
                renderItem={props.renderItem}/>
        }
    </View>;
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
    }
});