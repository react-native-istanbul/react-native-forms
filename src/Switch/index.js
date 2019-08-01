import React from 'react'
import { Button, ListItem, Text, Icon, Left, Body, Right, Switch as NbSwitch } from 'native-base';

export default function Switch({ label, value ,onValueChange,trackColor}) {
    return (
        <ListItem icon>
            <Left>
                <Button style={{ backgroundColor: "#007AFF", display: 'none' }}>
                    <Icon active name="wifi" />
                </Button>
            </Left>
            <Body style={{ marginLeft: -18 }}>
                <Text>{label}</Text>
            </Body>
            <Right>
                <NbSwitch
                 value={value}
                 trackColor={trackColor}
                 onValueChange={onValueChange}
                 />

            </Right>
        </ListItem>
    )
}