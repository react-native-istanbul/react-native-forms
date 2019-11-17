import React from 'react'
import { InputItem } from '../InputItem'
import { Switch as RNSwitch } from 'react-native'

export default function Switch({ label, value, onValueChange, trackColor }) {
    return (
        <InputItem
            label={label}
        >
            <RNSwitch
                value={value}
                trackColor={trackColor}
                onValueChange={onValueChange}
            />
        </InputItem>
    )
}