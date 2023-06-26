import { Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ShowCollection() {

    interface ICollection {
        id: number,
        title: string,
        urlCover: string,
        numberBooks: string,
    }


    const [collection, SetCollection] = useState({
        id: 1,
        "title": "Algusto Cury",
        "numberBooks": "6",
        "urlCover": "https://m.media-amazon.com/images/S/amzn-author-media-prod/kkje2a5k5oj24157drf1et5a55._SX450_.jpg"
    } as ICollection);

    const { navigate } = useNavigation();
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    const showBook = () => {
        navigate('show-book');
    }

    function getBooks() {
        fetch('https://apimocha.com/api-books-mobile/books')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setBooks(json)
                console.log('getBooks')
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
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} style={{ flex: 1 }}>
            <View
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 20,
                }}>
                <Image
                    style={{ marginHorizontal: 'auto', height: 400, width: 300, borderRadius: 10 }}
                    source={{ uri: collection.urlCover }}
                />
            </View>

            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ color: '#375A64', fontSize: 26, fontWeight: '700' }}>
                    Coleção:{collection.title}
                </Text>

                <View style={{ display: 'flex', flexDirection: 'row', gap: 15, marginVertical: 10 }}>
                    {/* <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ color: '#375A64', fontWeight: '500' }}>Titulo:</Text>
                        <Text style={{ color: '#56808C', fontWeight: '100', marginHorizontal: 3 }}>{collection.title}</Text>
                    </View> */}

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ color: '#375A64', fontWeight: '500' }}>Livros:</Text>
                        <Text style={{ color: '#56808C', fontWeight: '100', marginHorizontal: 3 }}>{collection.numberBooks}</Text>
                    </View>
                </View>
            </View>
            <ScrollView >

                {books.length == 0 ? <Text style={{ fontSize: 20, marginHorizontal: 20 }}>Carregando...</Text> : <Text></Text>}

                {books?.map((item) => (
                    <Book
                        key={item.id + item.title}
                        title={item.title}
                        urlCover={item.urlCover}
                        year={item.year}
                    />
                ))}
            </ScrollView>
        </ScrollView>

    )

}