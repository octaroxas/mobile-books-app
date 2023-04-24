import { Dimensions, StyleSheet, useWindowDimensions } from "react-native"

export const theme = {
    colors: {
        primary: '#375A64',
    }
}

export const globalStyles = StyleSheet.create({
    headerFormContainer: {
        // backgroundColor: 'red',
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        marginTop: 50
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