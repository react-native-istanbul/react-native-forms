import React from 'react'
import { Item } from 'native-base'
import { TextInput } from 'react-native'

export default function Input({ placeholder, success, error, value, keyboardType, onChangeText, clearButtonMode, style }) {
    return (
        <Item
            success={success}
            error={error}
            style={{ marginLeft: 10 }}>
            <TextInput
                placeholderTextColor={'#8F8E95'}
                value={value}
                placeholder={placeholder}
                style={{ height: 44, flex: 1, marginRight: 10, fontSize: 17 }}
                clearButtonMode={clearButtonMode}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
            />
        </Item>
    )
}