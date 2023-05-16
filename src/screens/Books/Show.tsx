import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import api from '../../api/api';
import { BooksItemProps } from '../../@tipagens/interfaces'

export default function Show() {

    interface book {
        id: number,
        title: string,
        year: string,
        urlCover: string
    }
    const [book, setBook] = useState({
        id: 1,
        title: 'De genio e louco, todo mundo tem um pouco',
        year: '2009',
        urlCover: 'https://m.media-amazon.com/images/I/51BMP3BV-4L._SY344_BO1,204,203,200_QL70_ML2_.jpg'
    } as book);


    // async function getBook() {
    //     const response = await api.get('');
    // }

    useEffect(() => {

    }, [])

    return (
        <ScrollView style={{ flex: 1 }}>


            <View
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 20,
                }}>
                <Image
                    style={{ marginHorizontal: 'auto', height: 400, width: 300, borderRadius: 10 }}
                    source={{ uri: book.urlCover }}
                />
            </View>
            <Text style={{ color: 'black', fontWeight: '700' }}>
                De gênio e louco todo, mundo Tem um pouco
            </Text>

            <View>
                <Text>Autor: Algusto Cury</Text>
                <Text>Lançamento: 2009</Text>
            </View>

        </ScrollView>
    )
}
