import React from 'react'
import { ListItem, Left, Body, Text, Right, Icon } from 'native-base'

export function InputItem({ children, label }) {
    return (
        <ListItem icon>
            <Left />
            <Body style={{ marginLeft: -18 }}>
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
        <ListItem icon onPress={onPress}>
            <Left />
            <Body style={{ flex: 0.5, marginLeft: -18 }}>
                <Text>{label}</Text>
            </Body>
            <Right style={{ flex: 0.5 }}>
                <Text numberOfLines={1}>{seletedItemText}</Text>
                <Icon active name="arrow-forward" />
            </Right>
        </ListItem>
    )
}

export function InputItemBody({ onPress, seletedItemText }) {
    return (
        <ListItem icon onPress={onPress}>
            <Left />
            <Body style={{ marginLeft: -18 }}>
                <Text>{seletedItemText}</Text>
            </Body>
            <Right>
                <Icon active name="arrow-forward" />
            </Right>
        </ListItem>
    )
}