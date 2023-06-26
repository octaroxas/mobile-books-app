import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/SignUp";
import Apresentation from "../screens/Apresentation";

const { Screen, Navigator } = createNativeStackNavigator()

export default function AuthStack() {
    return (
        <Navigator
            initialRouteName="apresentation"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="login" component={Login} />
            <Screen name="signup" component={SignUp} />

            <Screen
                name="apresentation"
                component={Apresentation}
            />
        </Navigator>
    )
}