import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';

export default function CreateCollection() {

    const { navigate } = useNavigation();


    const allCollections = () => {
        navigate('collections')
    }
    const createCollection = () => {
        allCollections()
    }

    const [title, setTitle] = useState();

    return (
        <View style={styles.container}>
            <Input
                label="Titulo"
                value={title}
                onChange={() => { }}
                placeholder='Ex: O vendedor de sonhos'
            />

            <TouchableOpacity
                style={styles.buttom}
                onPress={createCollection}
            >
                <Text style={styles.textButtom}>
                    Criar Coleção
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
        paddingTop: 50,
    },
    inputSearchContainer: {
        backgroundColor: '#F9F9F9',
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'space-between',
        marginTop: 20
    },
    inputSearch: {
        color: '#ABABAB',
        height: 50,
        padding: 10,
    },
    searchButton: {
        backgroundColor: '#375A64',
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    addBookButtomContainer: {
        display: 'flex',
        flexDirection: 'row-reverse',
        marginVertical: 10,
        marginHorizontal: 20
    },
    addBookButtom: {
        padding: 5,
        borderRadius: 5,
    },
    buttom: {
        backgroundColor: '#375A64',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButtom: {
        color: 'white'

    }

})