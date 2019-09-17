import React from 'react'
import { Text, View, Modal, FlatList } from 'react-native'
import { Header, Left, Right, Body, Title, Button, ListItem, Icon } from 'native-base'

export default class ModalList extends React.Component {

    componentDidMount() {
        const { data, value } = this.props;
        if (data && value) {
            selectedItem = data.find(x => x.value == value);
            this.props.valueText(selectedItem.key)
        }
    }

    render() {
        const { show, headerTitle, data, onPress, androidStatusBarColor, iosBarStyle, close, headerbackgroundColor, value, valueText, type = 'default' } = this.props;
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
                        <Header androidStatusBarColor={androidStatusBarColor} iosBarStyle={iosBarStyle} style={{ backgroundColor: headerbackgroundColor, }}>
                            <Left>
                                <Button transparent
                                    onPress={() => {
                                        close(false)
                                    }}
                                >
                                    <Icon name='arrow-back'
                                        style={{ color: 'white' }}
                                    />
                                </Button>
                            </Left>
                            <Body>
                                <Title style={{ color: 'white' }}>{headerTitle}</Title>
                            </Body>
                            <Right>
                                <Button transparent>

                                </Button>
                            </Right>
                        </Header>

                        <FlatList
                            data={data}
                            renderItem={({ item }) => (
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
                            )}
                        />
                    </Modal>
                </View >
            )
        return null
    }
}