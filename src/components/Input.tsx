import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { globalStyles } from '../global-styles'

export default function Input({ placeholder, value, onChange, label, ...rest }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <Text>{label}</Text>
            <TextInput
                style={globalStyles.input}
                {...rest}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </View>
    )
}
