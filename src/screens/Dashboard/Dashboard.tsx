import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView, StyleSheet, RefreshControl, Modal, Alert, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import api from '../../api/api'
import { Ionicons } from '@expo/vector-icons'

import { AuthContext } from '../../contexts/AuthContext'
import { TextInput } from 'react-native'
import CollectionList from '../../components/CollectionList/CollectionList'
import BookList from '../../components/BookList/BookList'
import { collectionList, collectionBooks, statisticsList } from '../../@tipagens/types'
import StatisticsItems from '../../components/StatisticsItems/StatisticsItems'

export default function Dashboard() {

    const listollections: Array<collectionList> = [
        {
            id: 1,
            title: 'Algusto Cury',
            numberOfBooks: 6,
            urlCover: 'https://m.media-amazon.com/images/I/51BMP3BV-4L._SY344_BO1,204,203,200_QL70_ML2_.jpg'
        },
        {
            id: 2,
            title: 'Harry Potter',
            numberOfBooks: 2,
            urlCover: 'https://m.media-amazon.com/images/I/41897yAI4LL._SY344_BO1,204,203,200_QL70_ML2_.jpg'
        },
        {
            id: 3,
            title: 'The Witcher',
            numberOfBooks: 2,
            urlCover: 'https://m.media-amazon.com/images/I/51vwNzvYc+L._SY344_BO1,204,203,200_.jpg'
        },
        {
            id: 4,
            title: 'Lovecraft',
            numberOfBooks: 2,
            urlCover: 'https://m.media-amazon.com/images/I/51Sim4WoXmL._SY344_BO1,204,203,200_QL70_ML2_.jpg'
        },
        {
            id: 5,
            title: 'Dark Souls',
            numberOfBooks: 2,
            urlCover: 'https://m.media-amazon.com/images/I/41Lxb5fDCuL._SY344_BO1,204,203,200_QL70_ML2_.jpg'
        },

    ]

    const listBooks: Array<collectionBooks> = [
        {
            id: 1,
            title: 'De genio e louco, todo mundo tem um pouco',
            year: '2009',
            urlCover: 'https://m.media-amazon.com/images/I/51BMP3BV-4L._SY344_BO1,204,203,200_QL70_ML2_.jpg'
        },
        {
            id: 2,
            title: 'One Piece',
            year: '1999',
            urlCover: 'https://m.media-amazon.com/images/P/B07S1P3XDZ.01._SCLZZZZZZZ_SX500_.jpg'
        },
        {
            id: 3,
            title: 'Sussurros na escuridão',
            year: '200x',
            urlCover: 'https://m.media-amazon.com/images/I/81IJfIPsZzL._AC_UL400_.jpg'
        },
        {
            id: 4,
            title: 'Estudo em vermelho',
            year: '200x',
            urlCover: 'https://m.media-amazon.com/images/I/61GFsO7j0ZL._AC_UL400_.jpg'
        },
        {
            id: 5,
            title: 'O vendedor de sonhos',
            year: '2009',
            urlCover: 'https://m.media-amazon.com/images/I/61AsD5IgZnL._AC_UL400_.jpg'
        },

    ]
    const listStatistics: Array<statisticsList> = [
        {
            label: 'Páginas Lidas',
            value: '100'
        },

        {
            label: 'Livros finalizados',
            value: '100'
        },

        {
            label: 'Coleções criadas',
            value: '100'
        },

        {
            label: 'Total de registros',
            value: '100'
        },
    ]
    const { handleLogout, setAuthenticated, setLoading } = useContext(AuthContext)

    const { navigate } = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    // const showBook = (id) => {
    //     navigate('show-book', { id: id });
    // }

    // const showCollection = (id) => {
    //     navigate('show-collection', { id: id });
    // }

    // const allCollections = (id) => {
    //     navigate('all-collections', { id: id });
    // }

    // const allBooks = (id) => {
    //     navigate('all-books', { id: id });
    // }

    useEffect(() => {

    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={{ color: '#ABABAB' }}>Olá!Fulano</Text>
                    <Text style={styles.header}>Dashboard</Text>
                </View>

                <View style={styles.inputSearchContainer}>
                    <TextInput placeholder='Livros, coleções...' style={styles.inputSearch} />
                    <TouchableOpacity style={styles.searchButton}>
                        <Ionicons name="search" size={20} color="white" />
                    </TouchableOpacity>
                </View>

                <CollectionList list={listollections} />

                <BookList list={listBooks} />

                <View style={{ marginHorizontal: 20, marginVertical: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ color: '#375A64', fontSize: 20 }}>Estatísticas</Text>
                </View>

                <StatisticsItems list={listStatistics} />

            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        // display: "flex",
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
    },
    header: {
        fontSize: 35,
        color: '#375A64',
        fontFamily: 'Lobster_400Regular',
    },
    inputSearchContainer: {
        backgroundColor: '#F9F9F9',
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'space-between'
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
    colectionsContainer: {
        display: 'flex',
        marginVertical: 10,
        marginLeft: 20
    },
    colectionItem: {
        height: 200,
        width: 150,
        marginHorizontal: 5,
        borderRadius: 15,
        backgroundColor: '#F6F6F6'
    },
    statisticsContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    statisticsItem: {
        height: 100,
        width: 100,
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
        marginHorizontal: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        // margin: 20,
        width: '90%',
        height: '50%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})
