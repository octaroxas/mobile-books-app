import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import api from '../../api/api';
import { BooksItemProps } from '../../@tipagens/interfaces'

export default function Show() {

    interface book {
        id: number,
        title: string,
        year: string,
        urlCover: string,
        author: string,
        synopsis: string
    }


    const [book, setBook] = useState({
        id: 1,
        author: 'Algusto Cury',
        title: 'De gênio e louco, todo mundo tem um pouco',
        year: '2009',
        urlCover: 'https://m.media-amazon.com/images/I/51BMP3BV-4L._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        synopsis: 'Bartolomeu e Barnabé são personagens que já estavam nos dois primeiros livros da saga Vendedor de Sonhos. Neste livro, eles ganham o centro da narrativa e ficamos conhecendo quem são esses dois maltrapilhos que, um dia, se juntaram ao Vendedor de Sonhos para acompanhá-lo na sua luta para semear sonhos e fazer um mundo melhor. Bartolomeu e Barnabé são dessas pessoas que enfrentam a vida de maneira diferente: se metem em muitas enrascadas e fazem os outros pensarem em suas ações. Tão populares quanto os palhaços, eles também possuem um profundo lado trágico. A combinação desses dois lados é explosiva.'
    } as book);

    const [tab, setTab] = useState('sinopse');
    const [reads, setReads] = useState([
        {

        }
    ]);


    // async function getBook() {
    //     const response = await api.get('');
    // }

    function TabSelectionContent() {
        if (tab === 'sinopse') return <Sinopse />
        if (tab === 'reads') return <Reads />
        if (tab === 'avaliations') return <Avaliations />
        if (tab === 'infos') return <Infos />
    }

    function Sinopse() {
        return (
            <View style={{ marginVertical: 10 }}>
                <Text style={{ textAlign: 'justify', color: '#375A54' }}>{book.synopsis}</Text>
            </View>
        )
    }

    function Reads() {
        return (
            <View>
                <Text>

                </Text>
            </View>
        )
    }

    function Avaliations() {
        return (
            <View>
                <Text>Avaliações</Text>
            </View>
        )
    }

    function Infos() {
        return (
            <View>
                <Text>Infos</Text>
            </View>
        )
    }

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
            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ color: '#375A64', fontSize: 26, fontWeight: '700' }}>
                    De gênio e louco todo, mundo Tem um pouco
                </Text>

                <View style={{ display: 'flex', flexDirection: 'row', gap: 15, marginVertical: 10 }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ color: '#375A64', fontWeight: '500' }}>Autor:</Text>
                        <Text style={{ color: '#56808C', fontWeight: '100', marginHorizontal: 3 }}>{book.author}</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ color: '#375A64', fontWeight: '500' }}>Lançamento:</Text>
                        <Text style={{ color: '#56808C', fontWeight: '100', marginHorizontal: 3 }}>{book.year}</Text>
                    </View>
                </View>
                <View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ display: 'flex', flexDirection: 'row', gap: 30 }}>
                        <TouchableOpacity
                            onPress={() => setTab('sinopse')}
                            style={{ marginRight: 40, display: 'flex', flexDirection: 'column', paddingVertical: 10 }}>
                            <Text style={{ color: tab === 'sinopse' ? '#375A64' : '#D8D8D8', fontWeight: '800' }}>Sinopse</Text>
                            {tab === 'sinopse' ? <View style={{ borderBottomWidth: 2, borderBottomColor: '#375A64' }}></View> : ''}
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setTab('reads')}
                            style={{ marginRight: 40, display: 'flex', flexDirection: 'column', paddingVertical: 10 }}>
                            <Text style={{ color: tab === 'reads' ? '#375A64' : '#D8D8D8', fontWeight: '800' }}>Leituras</Text>
                            {tab === 'reads' ? <View style={{ borderBottomWidth: 2, borderBottomColor: '#375A64' }}></View> : ''}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setTab('avaliations')} style={{ marginRight: 40, display: 'flex', flexDirection: 'column', paddingVertical: 10 }}>
                            <Text style={{ color: tab === 'avaliations' ? '#375A64' : '#D8D8D8', fontWeight: '800' }}>Avaliações</Text>
                            {tab === 'avaliations' ? <View style={{ borderBottomWidth: 2, borderBottomColor: '#375A64' }}></View> : ''}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setTab('infos')} style={{ marginRight: 40, display: 'flex', flexDirection: 'column', paddingVertical: 10 }}>
                            <Text style={{ color: tab === 'infos' ? '#375A64' : '#D8D8D8', fontWeight: '800' }}>Informações gerais</Text>
                            {tab === 'infos' ? <View style={{ borderBottomWidth: 2, borderBottomColor: '#375A64' }}></View> : ''}
                        </TouchableOpacity>
                    </ScrollView>
                    <TabSelectionContent />
                </View>
            </View>
        </ScrollView>
    )
}
