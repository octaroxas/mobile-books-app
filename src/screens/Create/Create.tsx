import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Create() {
    return (
        <View style={{ flex: 1, alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            <TouchableOpacity style={{ height: 200, width: 200, backgroundColor: 'gray' }}>
                <Text>
                    Novo Livro
                </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>
                    Criar Coleção
                </Text>
            </TouchableOpacity>
        </View>
    )
}
