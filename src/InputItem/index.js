import React from 'react'
import { ListItem, Left, Body, Text, Right, Icon } from 'native-base'

export function InputItem({ children, label }) {
    return (
        <ListItem style={{ marginLeft: -4, backgroundColor: 'white' }} icon>
            <Left />
            <Body style={{ backgroundColor: 'white' }}>
                <Text>{label}</Text>
            </Body>
            <Right>
                {children}
            </Right>
        </ListItem>
    )
}

export function InputItemText({ onPress, label, seletedItemText }) {
    return (
        <ListItem style={{ marginLeft: -4, backgroundColor: 'white' }} icon onPress={onPress}>
            <Left />
            <Body style={{ flex: 0.5, backgroundColor: 'white' }}>
                <Text>{label}</Text>
            </Body>
            <Right style={{ flex: 0.5, backgroundColor: 'white' }}>
                <Text numberOfLines={1}>{seletedItemText}</Text>
                <Icon active name="arrow-forward" />
            </Right>
        </ListItem>
    )
}

export function InputItemBody({ onPress, seletedItemText }) {
    return (
        <ListItem style={{ marginLeft: -4, backgroundColor: 'white' }} icon onPress={onPress}>
            <Left />
            <Body style={{ backgroundColor: 'white' }}>
                <Text>{seletedItemText}</Text>
            </Body>
            <Right style={{ backgroundColor: 'white' }}>
                <Icon active name="arrow-forward" />
            </Right>
        </ListItem>
    )
}