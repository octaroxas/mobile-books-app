import { Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ListCollections() {

    const { navigate } = useNavigation();
    const [collections, setCollections] = useState([])
    const [refreshing, setRefreshing] = useState(false);

    const showCollection = () => {
        navigate("show-collection")
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    function getCollections() {
        fetch('https://apimocha.com/api-books-mobile/collections')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setCollections(json)
                console.log('ddddddd')
            })
            .catch(err => console.log(err))

        console.log(`carregar colecoes`)
    }

    interface ICollection {
        id?: number,
        numberBooks: string,
        title: string,
        urlCover: string,
    }

    useEffect(() => {
        getCollections()
    }, [])

    const Collection = ({ urlCover, numberBooks, title }: ICollection) => {
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
            <TouchableOpacity style={styles.bookContainer} onPress={showCollection}>
                <Image style={styles.image} source={{ uri: urlCover }} />
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.year}>Número de livros: {numberBooks}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} style={styles.container} >
            <View style={styles.addBookButtomContainer}>
                {/* <TouchableOpacity onPress={createBook} style={styles.addBookButtom}>
                    <Text>
                        Adicionar Livro +
                    </Text>
                </TouchableOpacity> */}
            </View>

            <ScrollView >

                {collections.length == 0 ? <Text style={{ fontSize: 20, marginHorizontal: 20 }}>Carregando Coleções...</Text> : <Text></Text>}

                {collections?.map((item) => (
                    <Collection
                        key={item.id + item.title}
                        title={item.title}
                        urlCover={item.urlCover}
                        numberBooks={item.numberBooks}
                    />
                ))}
            </ScrollView>
        </ScrollView>
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

