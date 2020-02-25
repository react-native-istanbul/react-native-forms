import React from 'react'
import { Item } from 'native-base'
import { TextInput } from 'react-native'

export default function Input({ placeholder, success, error, value, keyboardType, secureTextEntry, onChangeText, clearButtonMode, style }) {
    return (
        <Item
            success={success}
            error={error}
            style={{ paddingLeft: 10, backgroundColor: 'white' }}>
            <TextInput
                placeholderTextColor={'#8F8E95'}
                value={value}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={{ height: 44, flex: 1, marginRight: 10, fontSize: 17 }}
                clearButtonMode={clearButtonMode}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
            />
        </Item>
    )
}