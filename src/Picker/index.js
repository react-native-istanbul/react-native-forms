import React from 'react'
import { View, NativeModules, Modal, Picker as RnPicker, Button as RnButton, Platform } from 'react-native'
import styles from './styles'
// import PropTypes from 'prop-types'
import { Button, ListItem, Text, Icon, Left, Body, Right } from 'native-base';

export const NativePicker = ({ data, value, pickerRef, onValueChange, onCancel, label }) => {
    pickerRef({
        show: () => {
            NativeModules.ReactNativePickerModule.show(
                data,
                value,
                label,
                onValueChange,
                onCancel
            )
        }
    });
    return <View style={{ display: 'none' }} />
}

export default class Picker extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedITem: '',
            show: false,
            selected: ''
        }
        this.picker;
    }

    static defaultProps = {
        doneTitleIOS: 'Done',
        modalAnimationIOS: true,
        visible: false,
        value: ''
    };

    doneOnPress = () => {
        const { data } = this.props;
        selectedItem = data.find(x => x.value == this.state.selectedITem);
        this.props.onValueChange(this.state.selectedITem)
        this.setState({ show: false, seletedItemText: selectedItem.key })
    }

    closeModal = () => {
        this.setState({ show: false })
    }

    onItemChange = (item) => {
        const { data } = this.props;
        selectedItem = data.find(x => x.value == item);
        this.setState({ selected: item, selectedITem: item })
    }

    UNSAFE_componentWillMount() {
        this.setState({ selectedITem: this.props.value })
    }

    componentDidMount() {
        const { data, value } = this.props;
        if (data) {
            selectedItem = data.find(x => x.value == value);
            this.setState({ seletedItemText: selectedItem.key })
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { data } = this.props;
        if (nextProps.value != this.props.value) {
            selectedItem = data.find(x => x.value == nextProps.value);
            this.setState({ seletedItemText: selectedItem.key })
        }
        return true;
    }

    getData() {
        let obj = [];
        this.props.data.forEach(element => { obj.push(element.key); });
        return obj;
    }

    getValue(data, index) {
        return data[index].value
    }

    show() {
        const { value } = this.props;
        this.setState({ show: true, selectedITem: value })
        if (Platform.OS === 'android')
            this.picker.show();
    }

    renderPicker = () => {
        const { data } = this.props;
        const { selectedITem } = this.state;
        return (
            <RnPicker
                selectedValue={selectedITem}
                onValueChange={(item) => this.onItemChange((item))}
            >
                {
                    data &&
                    data.map((item) => (
                        <RnPicker.Item
                            label={item.key}
                            value={item.value}
                            key={item.key}
                        />
                    ))
                }
            </RnPicker>
        )
    }

    render() {
        const { doneTitleIOS, modalAnimationIOS, label, data, cancelTitleIOS, onValueChange } = this.props;
        const { show, seletedItemText } = this.state;
        return (
            <React.Fragment>
                <ListItem icon onPress={() => { this.show() }}>
                    {
                        <React.Fragment>
                            <Left >
                                <Button style={{ backgroundColor: "#007AFF", display: 'none' }}>
                                    <Icon active name="wifi" />
                                </Button>
                            </Left>
                            <Body style={{ flex: 0.5, marginLeft: -18 }}>
                                <Text>{label}</Text>
                            </Body>
                            <Right style={{ flex: 0.5 }}>
                                <Text numberOfLines={1}>{seletedItemText}</Text>
                                <Icon active name="arrow-forward" />
                            </Right>
                        </React.Fragment>
                    }
                </ListItem>
                {
                    Platform.OS === 'ios' ?
                        <Modal transparent={true} visible={show} animated={modalAnimationIOS}>
                            <View onTouchStart={this.closeModal} style={styles.modalStart}>
                            </View>
                            <View>
                                <View style={styles.modalBtnContainer}>
                                    <View style={styles.btnCancelContainer}>
                                        <RnButton onPress={this.closeModal} title={cancelTitleIOS}></RnButton>
                                    </View>
                                    <View style={styles.btnDoneContainer}>
                                        <RnButton onPress={this.doneOnPress} title={doneTitleIOS}></RnButton>
                                    </View>
                                </View>
                                <View style={styles.picker}>
                                    {this.renderPicker()}
                                </View>
                            </View>
                        </Modal>
                        : <NativePicker
                            onCancel={() => { console.log('Cancelled') }}
                            pickerRef={e => this.picker = e}
                            value={0}
                            data={this.getData()}
                            label={label}
                            onValueChange={(value, index) => {
                                const val = this.getValue(data, index)
                                this.setState({ seletedItemText: value, value: val })
                                onValueChange(val)
                            }}
                        />
                }
            </React.Fragment>
        )
    }
}

// Picker.propTypes = {
//     modalAnimationIOS: PropTypes.bool,
//     doneTitleIOS: PropTypes.string,
//     visible: PropTypes.bool,
//     value: PropTypes.string
// }