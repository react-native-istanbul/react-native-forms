import React from 'react'
import { View, Modal, Button as RnButton, Platform } from 'react-native'
import styles from './styles'
import { Button, ListItem, Text, Icon, Left, Body, Right } from 'native-base';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment'

export default class DateTimePicker extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedITem: new Date(),
            show: false,
            selected: ''
        }
    }

    doneOnPress = () => {
        const { selectedITem, } = this.state;
        this.props.onValueChange(selectedITem)
        this.setState({
            show: false,
            seletedItemText: this.getDate(selectedITem)
        })
    }

    closeModal = () => {
        this.setState({ show: false })
    }

    setDate = (event, date) => {
        const { selectedITem, } = this.state;
        this.setState({
            selectedITem: date,
            show: Platform.OS === 'ios' ? true : false,
        });
        if (Platform.OS === 'android') {
            this.props.onValueChange(date)
            this.setState({
                seletedItemText: this.getDate(date)
            })
        }
    }

    getDate(date) {
        const { dateFormat } = this.props
        return Moment(date).format(dateFormat);
    }

    componentDidMount() {
        const { value } = this.props
        this.setState({
            selectedITem: value,
            seletedItemText: this.getDate(value)
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.value != this.props.value) {
            this.setState({ seletedItemText: this.getDate(nextProps.value) })
        }
        return true;
    }

    show() {
        const { value } = this.props;
        this.setState({ show: true, selectedITem: value })
    }

    renderPicker = () => {
        const { selectedITem } = this.state;
        const { minimumDate, maximumDate, androidDisplay } = this.props
        return (
            <RNDateTimePicker
                value={selectedITem}
                mode={'date'}
                minimumDate={minimumDate}
                maximumDate={maximumDate}
                display={androidDisplay}
                onChange={this.setDate}
            />
        )
    }

    render() {
        const { doneTitleIOS, modalAnimationIOS, label, cancelTitleIOS, dateFormat } = this.props;
        const { show, seletedItemText } = this.state;
        return (
            <>
                <ListItem icon onPress={() => { this.show() }}>
                    {
                        <React.Fragment>
                            <Left >
                                <Button style={{ backgroundColor: "#007AFF", display: 'none' }}>
                                    <Icon active name="wifi" />
                                </Button>
                            </Left>
                            <Body style={{ flex: 0.3, marginLeft: -18 }}>
                                <Text>{label}</Text>
                            </Body>
                            <Right style={{ flex: 0.7 }}>
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
                        : show &&
                        this.renderPicker()
                }
            </>
        )
    }
}