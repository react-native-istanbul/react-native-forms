import { Item, Input as InputNativeBae } from 'native-base'
import React from 'react'

export default function Input({ placeholder, success, error, value, keyboardType, onChangeText, clearButtonMode, style }) {
    return (
        <Item success={success} error={error} style={{ marginLeft: 10 }}>
            <InputNativeBae
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={value}
                style={style}
                clearButtonMode={clearButtonMode}
                onChangeText={onChangeText}
            />
        </Item>
    )
}