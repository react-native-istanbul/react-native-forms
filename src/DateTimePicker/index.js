import React from 'react'
import { Platform } from 'react-native'
import styles from './styles'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment'
import Modal from '../Modal'
import { InputItemText } from '../InputItem'

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
        const { doneTitleIOS, modalAnimationIOS, label, cancelTitleIOS, dateFormat, darkMode } = this.props;
        const { show, seletedItemText } = this.state;
        return (
            <>
                <InputItemText
                    onPress={() => { this.show() }}
                    label={label}
                    seletedItemText={seletedItemText}
                />
                {
                    Platform.OS === 'ios' ?
                        <Modal
                            doneTitleIOS={doneTitleIOS}
                            modalAnimationIOS={modalAnimationIOS}
                            cancelTitleIOS={cancelTitleIOS}
                            show={show}
                            doneOnPress={() => { this.doneOnPress() }}
                            closeOnPress={() => { this.closeModal() }}
                            darkMode={darkMode}
                        >
                            {this.renderPicker()}
                        </Modal>
                        : show &&
                        this.renderPicker()
                }
            </>
        )
    }
}