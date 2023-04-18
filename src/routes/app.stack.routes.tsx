import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from "./tab.routes";
import CreateBooks from "../screens/CreateBooks";


const { Screen, Navigator } = createNativeStackNavigator()

export default function AppStack() {
    return (
        <Navigator
            initialRouteName="main"
            screenOptions={{
                headerStyle: {
                    // backgroundColor: '#5971FF',
                },
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


        </Navigator>
    )
}