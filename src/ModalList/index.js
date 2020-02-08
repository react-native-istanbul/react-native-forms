import React from 'react'
import { Text, View, Modal, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import { ListItem, HeaderContainer } from '../InputItem/styles'

export default class ModalList extends React.Component {

    componentDidMount() {
        const { data, value } = this.props;
        if (data && value) {
            selectedItem = data.find(x => x.value == value);
            this.props.valueText(selectedItem.key)
        }
    }

    render() {
        const { show, headerTitle, data, onPress, androidStatusBarColor, iosBarStyle, close, headerbackgroundColor, value, valueText } = this.props;
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={show}
                    onRequestClose={() => {
                        close(false)
                    }}>
                    <StatusBar barStyle={iosBarStyle} />

                    <HeaderContainer style={{ backgroundColor: headerbackgroundColor }}>
                        <TouchableOpacity
                            onPress={() => {
                                close(false)
                            }}
                            style={{ flex: 0.2, marginLeft: 15 }}>
                            <Text style={{ color: '#ffffff', fontSize: 17 }}>Kapat</Text>
                        </TouchableOpacity>
                        <View style={{ flex: 0.6, alignItems: 'center' }}>
                            <Text style={{ color: '#ffffff', alignContent: 'center', fontSize: 17 }}>{headerTitle}</Text>
                        </View>

                        <View style={{ flex: 0.2, alignItems: 'center', backgroundColor: headerbackgroundColor }}>

                        </View>
                    </HeaderContainer>

                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <ListItem
                                underlayColor={'#c8c7cc'}
                                onPress={() => {
                                    onPress(item.value)
                                    close(false)
                                    valueText(item.key)
                                }}
                            >
                                <Text
                                    style={item.value == value ? { color: 'green', fontSize: 17 } : { color: 'black', fontSize: 17 }}
                                >
                                    {item.key}
                                </Text>
                            </ListItem>
                        )}
                    />
                </Modal>
            </View>
        )
    }
}