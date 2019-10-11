import React, { Component } from 'react'
import { Button, ListItem, Text, Icon, Left, Body, Right, Separator } from 'native-base';
import ModalList from '../ModalList'

export default class PickerList extends Component {
    state = {
        showModal: false,
        seletedItemText: ''
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.value != nextProps.value) {
            this.props.onChange(nextProps.value)
            if (nextProps.value == '')
                this.setState({ seletedItemText: '' })
        }
        return true
    }

    render() {
        const { type, headerTitle, value, androidStatusBarColor, headerbackgroundColor, separatorTitle, iosBarStyle, onChange, data, label } = this.props
        return (
            <React.Fragment>
                <ModalList
                    type={type}
                    headerTitle={headerTitle}
                    androidStatusBarColor={androidStatusBarColor}
                    value={value}
                    headerbackgroundColor={headerbackgroundColor}
                    iosBarStyle={iosBarStyle}
                    valueText={(selectedItemText) => { this.setState({ seletedItemText: selectedItemText }) }}
                    onPress={onChange}
                    show={this.state.showModal}
                    data={data}
                    close={() => { this.setState({ showModal: false }) }}
                />
                {
                    separatorTitle &&
                    <Separator>
                        <Text>{label}</Text>
                    </Separator>
                }
                <ListItem icon onPress={() => { this.setState({ showModal: true }) }}>
                    {
                        separatorTitle ?
                            <React.Fragment>
                                <Left >
                                    <Button style={{ backgroundColor: "#007AFF", display: 'none' }}>
                                        <Icon active name="wifi" />
                                    </Button>
                                </Left>
                                <Body style={{ marginLeft: -18 }}>
                                    <Text>{this.state.seletedItemText}</Text>
                                </Body>
                                <Right>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </React.Fragment>
                            :
                            <React.Fragment>
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
                            </React.Fragment>
                    }
                </ListItem>
            </React.Fragment>
        )
    }
}