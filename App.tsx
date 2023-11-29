import {SafeAreaView, StatusBar, StyleSheet} from 'react-native'
import React, {useEffect} from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/screens/home/Home";
import Detail from "./src/screens/detail/Detail";
import {Provider} from "react-redux";
import store from "./src/store/store";
import * as ImagePicker from "expo-image-picker";


const Stack = createStackNavigator()

const App = () => {
    useEffect(
        () => {
            StatusBar.setBarStyle('dark-content'); // You can set 'light-content' as well
            StatusBar.setBackgroundColor('#dedede');
            (async () => {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    console.error('Permission to access media library was denied!');
                }
            })();
        }, []
    )

    return (
        <Provider store={store}>
            <SafeAreaView style={{
                flex: 1,
                top: StatusBar.currentHeight,
            }}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'#dedede'} animated translucent/>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Home} options={{
                            headerTitleStyle: {fontSize: 20, color: 'black', fontWeight: 'bold'},
                            headerStyle: {
                                backgroundColor: '#dedede',
                                shadowColor: 'transparent',
                            },
                        }}/>
                        <Stack.Screen name="Details" component={Detail} options={{
                            headerTitleStyle: {fontSize: 18, margin: 0, padding: 0},
                            headerShown: false,
                        }}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </Provider>

    );
}
export default App
const styles = StyleSheet.create({})
