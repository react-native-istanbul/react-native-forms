import React from 'react'
import { Text, View, Modal, ScrollView } from 'react-native'
import { Header, Left, Right, Body, Title, Button, List, ListItem, Icon } from 'native-base'

export default class ModalList extends React.Component {

    componentDidMount() {
        const { data, value } = this.props;
        if (data && value) {
            selectedItem = data.find(x => x.value == value);
            this.props.valueText(selectedItem.key)
        }
    }

    render() {
        const { show, headerTitle, data, onPress, iosBarStyle, close, value, valueText, type = 'default' } = this.props;
        if (type == 'default')
            return (
                <View>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={show}
                        onRequestClose={() => {
                            console.log('close')
                        }}>
                        <Header iosBarStyle={iosBarStyle} style={{ backgroundColor: '#1595AE', }}>
                            <Left>
                                <Button transparent style={{ width: 60 }}
                                    onPress={() => {
                                        close(false)
                                    }}
                                >
                                    <Icon name='arrow-back'
                                        style={{ color: 'white' }}
                                    />
                                </Button>
                            </Left>
                            <Body style={{ width: 200 }}>
                                <Title style={{ width: 200, color: 'white' }}>{headerTitle}</Title>
                            </Body>
                            <Right>
                                <Button transparent>

                                </Button>
                            </Right>
                        </Header>
                        <ScrollView>
                            <List>
                                {
                                    data ?
                                        data.map((item) => {
                                            return (
                                                <ListItem selected={item.value == value}
                                                    key={item.value}
                                                    onPress={() => {
                                                        onPress(item.value)
                                                        close(false)
                                                        valueText(item.key)
                                                    }}>
                                                    <Left>
                                                        <Text>{item.key}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Icon name="md-checkmark" />
                                                    </Right>
                                                </ListItem>
                                            )
                                        }) : null
                                }
                            </List>
                        </ScrollView>
                    </Modal>
                </View>
            )
        return null
    }
}