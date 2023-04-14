import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../global-styles'

export default function Button({ title, ...rest }) {
    return (
        <TouchableOpacity {...rest} style={globalStyles.button}>
            <Text style={globalStyles.textButton}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
