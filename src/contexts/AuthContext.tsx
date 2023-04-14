import React, {
    createContext,
    useEffect,
    useState
} from "react";

import AppLoading from 'expo-app-loading';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';


import AsyncStorage from '@react-native-async-storage/async-storage'

interface Account {
    id: number,
    name: string,
    avatar: string,
    user_id: number,
    created_at: string,
    updated_at: string
}

interface User {
    id: number;
    email: string;
    avatar: string,
    emailVerifiedAt: string;
    updatedAt: string;
    createdAt: string;
    account: Account
}

interface IAuthContext {
    authenticated: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    handleSignUp: (form: any) => Promise<void>;
    handleLogin: ({ credentials }: any) => Promise<void>;
    handleLogout?: () => Promise<void>;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as IAuthContext)

function AuthProvider({ children }: any) {

    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSignUp = async (form: any) => {
        setAuthenticated(true);
    }

    const handleLogin = async () => {
        setAuthenticated(true)
        console.log('login click')
    }

    const handleLogout = async () => {

        AsyncStorage.clear()
        setAuthenticated(false)
    }

    useEffect(() => {


    }, [])

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                setLoading,
                handleSignUp,
                handleLogin,
                handleLogout,
                setAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
