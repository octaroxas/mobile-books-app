import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from "./tab.routes";
import { Ionicons } from '@expo/vector-icons'
import CreateBooks from "../screens/CreateBooks";
import ShowBook from "../screens/Books/Show";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const { Screen, Navigator } = createNativeStackNavigator()

export default function AppStack() {

    const { navigate, goBack } = useNavigation()

    return (
        <Navigator
            initialRouteName="show_book"
            screenOptions={{
                headerStyle: {},
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#fff'
                },
            }}
        >
            <Screen
                options={{ headerShown: false }}
                component={Tabs}
                name="main"
            />
            <Screen options={{
                headerTitle: 'criar livro'
            }}
                name="create_books"
                component={CreateBooks}
            />

            <Screen
                options={{
                    title: 'Informações do Livro',
                    headerTitleStyle: {
                        fontWeight: 'normal',
                    },
                }}
                name="show-book"
                component={ShowBook}
            />
        </Navigator>
    )
}