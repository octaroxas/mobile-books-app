import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { ColectionItemProps } from '../../@tipagens/interfaces'
import { useNavigation } from '@react-navigation/native';


export default function CollectionList({ list }: ColectionItemProps) {

    const { navigate } = useNavigation();

    const allCollections = () => {
        navigate('collections');
    }
    return (
        <View>
            <View style={{ marginHorizontal: 20, marginVertical: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ color: '#375A64', fontSize: 20 }}>Coleções</Text>
            </View>
            <ScrollView style={styles.colectionsContainer} showsHorizontalScrollIndicator={false} horizontal={true}>
                {list.map((item, index) => (
                    <TouchableOpacity>
                        <View key={index} style={styles.colectionItem}>
                            <Image style={{ borderRadius: 10, height: '100%', width: '100%' }} source={{ uri: item.urlCover }} />
                        </View>
                        <Text numberOfLines={1} style={{ flex: 1, fontWeight: '600', color: '#375A64' }}>{item.title}</Text>
                        <Text style={{ color: '#91B8C3' }} >{item.numberOfBooks} livros</Text>
                    </TouchableOpacity>
                ))}

                <View style={{ marginRight: 20 }}>
                    <TouchableOpacity onPress={allCollections} style={{
                        borderStyle: 'dashed',
                        height: 200,
                        width: 150,
                        backgroundColor: '#F6F6F6',
                        borderColor: '#ABABAB',
                        borderWidth: 1,
                        borderRadius: 10,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="arrow-forward-outline" color='gray' size={30} />
                            <Text> Ver Todas</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
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
    }
})
