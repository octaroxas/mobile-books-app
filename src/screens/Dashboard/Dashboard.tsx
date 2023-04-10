import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import api from '../../api/api'

import { AuthContext } from '../../contexts/AuthContext'
import styles from './styles/styles'

const notwaletsstyle = StyleSheet.create({
    cardWarning: {
        backgroundColor: '#393E56',
        height: 100,
        width: 200,
        borderRadius: 20,
        padding: 20,
        borderColor: '#FF7A7A',
        borderWidth: 1
    },
    textCard: {
        color: '#fff',
        fontWeight: 'bold'
    },
})




export default function Dashboard() {


    const { handleLogout, setAuthenticated, setLoading } = useContext(AuthContext)

    const { navigate } = useNavigation()

    const toSignUp = () => {
        navigate('signup');
      }
    useEffect(() => {
       
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <Text>Dashboard</Text>

                <TouchableOpacity onPress={handleLogout}>
          <Text>Sair dessa merda</Text>
        </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    )
}
