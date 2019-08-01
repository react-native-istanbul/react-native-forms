import { Item, Input as InputNativeBae } from 'native-base'
import React from 'react'

export default function Input({ placeholder, value, keyboardType, onChangeText }) {
    return (
        <Item style={{ marginLeft: 10 }}>
            <InputNativeBae
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChangeText}
            />
        </Item>
    )
}