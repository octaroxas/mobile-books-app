import { StyleSheet, FlatList, Text, TextInput, TouchableOpacity, View, Image, TouchableHighlight, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { collectionBooks } from '../../@tipagens/types';


export default function Index() {

    const { navigate } = useNavigation();
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')

    const showBook = () => {
        navigate('show-book');
    }

    function getBooks() {
        fetch('https://64866acfbeba6297278ec68e.mockapi.io/api/books')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setBooks(json)
                console.log('ddddddd')
            })
            .catch(err => console.log(err))

        console.log(`carregar livros`)
    }

    interface Book {
        id?: number,
        title: string,
        urlCover: string,
        year: string,
    }

    useEffect(() => {
        getBooks()
    }, [])

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
        }

    ]

    const Book = ({ urlCover, year, title }: Book) => {
        const styles = StyleSheet.create({
            image: {
                height: 120,
                width: 120,
                borderRadius: 10,
            },
            bookContainer: {
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                marginVertical: 5,
                marginHorizontal: 20
            },
            title: {
                fontSize: 14,
                fontWeight: '600',
                color: '#375A64'
            },
            year: {
                fontWeight: '400',
                color: '#91B8C3'
            }
        })
        return (
            <TouchableOpacity style={styles.bookContainer} onPress={showBook}>
                <Image style={styles.image} source={{ uri: urlCover }} />
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.year}>{year}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputSearchContainer}>
                <TextInput placeholder='Livros, coleções...' style={styles.inputSearch} />
                <TouchableOpacity style={styles.searchButton}>
                    <Ionicons name="search" size={20} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.addBookButtomContainer}>
                <TouchableOpacity style={styles.addBookButtom}>
                    <Text>
                        Adicionar Livro +
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                {books?.map((item) => (
                    <Book
                        key={item.id + item.title}
                        title={item.title}
                        urlCover={item.urlCover}
                        year={item.year}
                    />
                ))}
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
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


})