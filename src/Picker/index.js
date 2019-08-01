import React from 'react'
import { View, Modal, PickerIOS, Button, Platform, PickerItem } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

export default class Picker extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            selectedITem: '',
            visible: false
        }
    }

    static defaultProps = {
        doneTitleIOS: 'Done',
        modalAnimationIOS: true,
        value: ''
    };

    doneOnPress = () => {
        if (Platform.OS === 'ios') {
            this.setState({ visible: false })
            this.props.onChange(this.state.selectedITem)
        }
    }

    closeModal = () => {
        if (Platform.OS === 'ios') {
            this.setState({ visible: false })
        }
    }

    show() {
        if (Platform.OS === 'ios') {
            this.setState({ visible: true })
        }
    }

    onItemChange = (item) => {
        this.setState({ selectedITem: item })
    }

    componentWillMount() {
        this.setState({ selectedITem: this.props.value })
    }

    componentDidMount() {
        this.props.onChange(this.props.value)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return Platform.OS === 'ios'
    }

    render() {
        const { doneTitleIOS, modalAnimationIOS, cancelTitleIOS, data } = this.props;
        const { selectedITem, visible } = this.state;

        return (
            <Modal transparent={true} visible={visible} animated={modalAnimationIOS}>
                <View onTouchStart={this.closeModal} style={styles.modalStart}>
                </View>
                <View>
                    <View style={styles.modalBtnContainer}>
                        <View style={styles.btnCancelContainer}>
                            <Button onPress={this.closeModal} title={cancelTitleIOS}></Button>
                        </View>
                        <View style={styles.btnDoneContainer}>
                            <Button onPress={this.doneOnPress} title={doneTitleIOS}></Button>
                        </View>
                    </View>
                    <View style={styles.picker}>
                        <PickerIOS
                            selectedValue={selectedITem}
                            onValueChange={(item) => this.onItemChange((item))}
                        >
                            {
                                data.map(res => (
                                    <PickerItem
                                        key={res.key}
                                        label={res.key}
                                        value={res.value}
                                    />
                                ))
                            }
                        </PickerIOS>
                    </View>
                </View>
            </Modal>
        )
    }
}

Picker.propTypes = {
    modalAnimationIOS: PropTypes.bool,
    doneTitleIOS: PropTypes.string,
    value: PropTypes.string
}
