import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from "../screens/Dashboard/Dashboard";
import { Ionicons } from '@expo/vector-icons'
import CreateBooks from "../screens/CreateBooks";
import Create from "../screens/Create/Create";
import Profile from "../screens/Profile/Profile";

const { Navigator, Screen } = createBottomTabNavigator()


export default function Tabs() {

    return (
        <Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                tabBarInactiveTintColor: '#f1f1f1',
                headerStyle: {
                    // backgroundColor: '#5971FF',
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#fff'
                },
                tabBarStyle: {
                    height: 60,
                    backgroundColor: '#fff',
                },
                tabBarActiveTintColor: 'white',
                tabBarActiveBackgroundColor: '#f1f1f1',
                tabBarLabelStyle: {
                    marginBottom: 5,
                    fontWeight: 'bold',
                    color: 'gray'
                },
            }}
        >

            <Screen
                options={{
                    tabBarIcon: () => (<Ionicons name="home" size={20} color='gray' />),
                    headerShown: false
                }}
                name="Dashboard"
                component={Dashboard}
            />

            <Screen
                options={{
                    tabBarIcon: () => (<Ionicons name="person-outline" size={20} color='gray' />),
                    headerShown: false
                }}
                name="Criar"
                component={Create}
            />

            <Screen
                options={{
                    tabBarIcon: () => (<Ionicons name="person-outline" size={20} color='gray' />),
                    headerShown: false
                }}
                name="Criar livro"
                component={CreateBooks}
            />

            <Screen
                options={{
                    tabBarIcon: () => (<Ionicons name="person-outline" size={20} color='gray' />),
                    headerShown: false
                }}
                name="Perfil"
                component={Profile}
            />


        </Navigator>
    )
}