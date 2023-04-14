import { Dimensions, StyleSheet, useWindowDimensions } from "react-native"
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';


export const globalStyles = StyleSheet.create({
    headerFormContainer: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
    },
    formContainer: {
        marginHorizontal: 20,
        gap: 10
    },
    headerForm: {
        fontSize: 30,
        fontWeight: 800,
        color: '#375A64',
        fontFamily: 'Lobster_400Regular',
    },
    input: {
        backgroundColor: '#F9F9F9',
        padding: 10,
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#375A64',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        maxWidth: 100
    },
    textButton: {
        fontWeight: '800',
        color: 'white',
        textAlign: "center",
    }
});