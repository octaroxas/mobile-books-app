import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';

export default function Create() {

    const navigation = useNavigation();

    const [title, setTitle] = useState();
    const [year, setYear] = useState();
    return (
        <View style={styles.container}>
            {/* <Text>Criar livro</Text> */}
            <Input
                label="Titulo"
                value={title}
                onChange={() => { }}
                placeholder='Ex: O vendedor de sonhos'
            />

            <Input
                label="Ano"
                value={year}
                onChange={() => { }}
                placeholder='Ex: 2009'
            />

            <Input
                label="Descricao"
                value={year}
                onChange={() => { }}
                placeholder='...'
            />

            <Input
                label="Link da capa"
                value={year}
                onChange={() => { }}
                placeholder='http://'
            />

            <TouchableOpacity
                style={styles.buttom}
                onPress={() => { }}
            >
                <Text style={styles.textButtom}>
                    Cadastrar Livro
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButtom: {
        color: 'white'

    }

})