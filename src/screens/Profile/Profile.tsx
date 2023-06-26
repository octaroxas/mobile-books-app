import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Profile() {
    const [tab, setTab] = useState('descricao');


    interface IUser {
        id: number,
        name: string,
        email: string,
        urlProfile: string,
    }

    const [user, setUser] = useState({
        id: 1,
        name: 'Octacilio C Almeida',
        email: 'octa.oca44@gmail.com',
        urlProfile: 'https://cdn-icons-png.flaticon.com/512/727/727399.png?w=826&t=st=1687750089~exp=1687750689~hmac=f5ce21d2a95307ddab98e727776df3e0e3eafedeb8be3d6b4b3d0c3649f316f9',
    } as IUser);

    function TabSelectionContent() {
        if (tab === 'description') return <Description />
    }

    function Description() {
        return (
            <View>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
        )
    }


    useEffect(() => {

    }, [])
    return (
        <ScrollView style={{ flex: 1, padding: 20 }}>
            <View
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 20,
                }}>
                <Image
                    style={{ marginHorizontal: 'auto', borderWidth: 2, height: 200, width: 200, borderRadius: 10 }}
                    source={{ uri: user.urlProfile }}
                />
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text>{user.name}</Text>
                <Text>{user.email}</Text>
            </View>

            <View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ display: 'flex', flexDirection: 'row', gap: 30 }}>
                    <TouchableOpacity
                        onPress={() => setTab('description')}
                        style={{ marginRight: 40, display: 'flex', flexDirection: 'column', paddingVertical: 10 }}>
                        <Text style={{ color: tab === 'description' ? '#375A64' : '#D8D8D8', fontWeight: '800' }}>Descrição</Text>
                        {tab === 'description' ? <View style={{ borderBottomWidth: 2, borderBottomColor: '#375A64' }}></View> : ''}
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </ScrollView >
    )
}