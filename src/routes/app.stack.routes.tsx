import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from "./tab.routes";
import { Ionicons } from '@expo/vector-icons'
import CreateBooks from "../screens/CreateBooks";
import ShowBook from "../screens/Books/Show";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Index from "../screens/Books/Index";
import Create from "../screens/Books/Create";
import ListCollections from "../screens/Collections/ListCollections";
import ShowCollection from "../screens/Collections/ShowCollection";
import CreateCollection from "../screens/Collections/CreateCollection";


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
                    title: 'Meus Livros',
                    headerTitleStyle: {
                        fontWeight: 'normal',
                    },
                }}
                name="all-books"
                component={Index}
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

            <Screen
                options={{
                    title: 'Criar Livro',
                    headerTitleStyle: {
                        fontWeight: 'normal',
                    },
                }}
                name="create-book"
                component={Create}
            />

            <Screen
                options={{
                    title: 'Coleções',
                    headerTitleStyle: {
                        fontWeight: 'normal',
                    },
                }}
                name="collections"
                component={ListCollections}
            />

            <Screen
                options={{
                    title: 'Informações da Coleção',
                    headerTitleStyle: {
                        fontWeight: 'normal',
                    },
                }}
                name="show-collection"
                component={ShowCollection}
            />

            <Screen
                options={{
                    title: 'Criar Coleção',
                    headerTitleStyle: {
                        fontWeight: 'normal',
                    },
                }}
                name="create-collection"
                component={CreateCollection}
            />
        </Navigator>
    )
}