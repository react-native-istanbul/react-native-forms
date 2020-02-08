import React from 'react'
import { StyleSheet, } from 'react-native'
import { Item, TextInput } from '../InputItem/styles'

export default function Input({ placeholder, error, value, keyboardType, onChangeText, clearButtonMode }) {
    return (
        <Item
            style={error ? style.error : style.success}>
            <TextInput
                placeholderTextColor={'#8F8E95'}
                value={value}
                placeholder={placeholder}
                clearButtonMode={clearButtonMode}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
            />
        </Item>
    )
}

const style = StyleSheet.create({
    error: {
        borderBottomColor: 'red',
        paddingLeft: 10
    },
    success: {
        borderBottomColor: 'green',
        paddingLeft: 10
    }
})