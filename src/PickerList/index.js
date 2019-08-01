import React, { Component } from 'react'
import { Button, ListItem, Text, Icon, Left, Body, Right } from 'native-base';
import ModalList from '../ModalList'

export default class PickerList extends Component {
    state = {
        showModal: false,
        seletedItemText: ''
    }

    render() {
        const { type, headerTitle, value, iosBarStyle, onChange, data, label } = this.props
        return (
            <React.Fragment>
                <ModalList
                    type={type}
                    headerTitle={headerTitle}
                    value={value}
                    iosBarStyle={iosBarStyle}
                    valueText={(selectedItemText) => { this.setState({ seletedItemText: selectedItemText }) }}
                    onPress={onChange}
                    show={this.state.showModal}
                    data={data}
                    close={() => { this.setState({ showModal: false }) }}
                />

                <ListItem icon onPress={() => { this.setState({ showModal: true }) }}>
                    <Left >
                        <Button style={{ backgroundColor: "#007AFF", display: 'none' }}>
                            <Icon active name="wifi" />
                        </Button>
                    </Left>
                    <Body style={{ marginLeft: -18 }}>
                        <Text>{label}</Text>
                    </Body>
                    <Right>
                        <Text>{this.state.seletedItemText}</Text>
                        <Icon active name="arrow-forward" />
                    </Right>
                </ListItem>
            </React.Fragment>
        )
    }
}
