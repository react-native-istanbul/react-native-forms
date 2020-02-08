import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Item, LeftItem, RightItem, ItemLeftText, ItemRightText } from './styles'

export function InputItem({ children, label }) {
    return (
        <Item>
            <LeftItem>
                <ItemLeftText>
                    {label}
                </ItemLeftText>
            </LeftItem>
            <RightItem>
                {children}
            </RightItem>
        </Item>
    )
}

export function InputItemText({ onPress, label, seletedItemText }) {
    return (
        <Item>
            <LeftItem>
                <ItemLeftText>
                    {label}
                </ItemLeftText>
            </LeftItem>
            <RightItem>
                <TouchableOpacity
                    onPress={onPress}
                >
                    <ItemRightText>
                        {seletedItemText}
                    </ItemRightText>
                </TouchableOpacity>
            </RightItem>
        </Item>
    )
}

export function InputItemBody({ onPress, seletedItemText }) {
    return (
        <Item>
            <TouchableOpacity onPress={onPress} style={{ flex: 1, justifyContent: 'center' }}>
                <ItemLeftText>
                    {seletedItemText}
                </ItemLeftText>
            </TouchableOpacity>
        </Item>
    )
}