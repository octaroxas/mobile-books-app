import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from "../screens/Dashboard/Dashboard";
import { Ionicons } from '@expo/vector-icons'
import CreateBooks from "../screens/CreateBooks";
import Create from "../screens/Create/Create";
import Profile from "../screens/Profile/Profile";
import { theme } from '../../src/global-styles/index'
import Friends from "../screens/Friends/Friends";
import { TouchableOpacity, View } from "react-native";
import Button from "../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";


export default function Tabs() {
    const { Navigator, Screen } = createBottomTabNavigator()
    const { navigate, goBack } = useNavigation()

    return (
        <Navigator
            initialRouteName="Dashboard"
            screenOptions={
                {
                    tabBarStyle: {
                        height: 60,
                        backgroundColor: '#fff',
                        borderTopWidth: 0,
                        shadowColor: 'white'
                    },
                    tabBarIconStyle: {
                        color: '#red',
                    },
                    headerStyle: {

                    },
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: 'white',
                    tabBarActiveBackgroundColor: theme.colors.primary,
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        fontWeight: 'bold',
                    },
                }}
        >

            <Screen

                options={{
                    tabBarIcon: () => (<Ionicons name="home" size={20} />),
                    headerShown: true
                }}
                name="Dashboard"
                component={Dashboard}
            />
            <Screen

                options={{
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ padding: 10 }}
                            onPress={() => goBack()}
                        >
                            <Ionicons name="chevron-back" size={20} />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: () => (<Ionicons name="person-add" size={20} />),
                }}
                name="Amigos"
                component={Friends}
            />

            <Screen

                options={{
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ padding: 10 }}
                            onPress={() => goBack()}
                        >
                            <Ionicons name="chevron-back" size={20} />
                        </TouchableOpacity>
                    ), tabBarIcon: () => (

                        <Ionicons name="add" size={25} />

                    )
                }}
                component={CreateBooks}
                name="Adicionar"
            />

            <Screen
                options={{
                    tabBarIcon: () => (<Ionicons name="person" size={20} />),
                    headerShown: false
                }}
                name="Perfil"
                component={Profile}
            />
        </Navigator >
    )
}