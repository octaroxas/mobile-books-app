import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from "../screens/Dashboard/Dashboard";
import AppStack from "./app.stack.routes";
import { Feather, Ionicons } from '@expo/vector-icons'
import CreateBooks from "../screens/CreateBooks";

const { Navigator, Screen } = createBottomTabNavigator()


export default function Tabs() {

    return (
        <Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                tabBarInactiveTintColor: '#f1f1f1',
                headerStyle: {
                    backgroundColor: '#5971FF',
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#fff'
                },
                tabBarStyle: {
                    height: 60,
                    backgroundColor: '#3B405A',
                },
                tabBarActiveTintColor: 'white',
                tabBarActiveBackgroundColor: '#647AFF',
                tabBarLabelStyle: {
                    marginBottom: 5,
                    fontWeight: 'bold'
                },
            }}
        >
            
            
            <Screen
                options={{
                    tabBarIcon: () => (<Ionicons name="home" size={20} color='white' />),
                    // headerShown: false
                }}
                name="Dashboard"
                component={Dashboard}
            />

<Screen
                options={{
                    tabBarIcon: () => (<Ionicons name="home" size={20} color='white' />),
                    // headerShown: false
                }}
                name="Criar livro"
                component={CreateBooks}
            />


            
            
        </Navigator>
    )
}