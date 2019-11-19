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
        const { selectedITem } = this.state;
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
        const { value, placeHolder } = this.props
        let dateValue = value;
        let seletedItemText = placeHolder;
        if (value == '' || value == undefined || value == null) {
            dateValue = new Date();
        }
        else {
            seletedItemText = this.getDate(dateValue);
            dateValue = Moment(value, this.props.dateFormat).toDate();
        }
        this.setState({
            selectedITem: dateValue,
            seletedItemText: seletedItemText
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.value != this.props.value) {
            let dateValue = nextProps.value;
            let selectedItemText = '';
            if (nextProps.value == '' || nextProps.value == undefined || nextProps.value == null) {
                dateValue = new Date();
                selectedItemText = this.props.placeHolder;
                this.setState({ selectedITem: new Date() })
            }
            else {
                selectedItemText = this.getDate(dateValue)
                this.setState({ selectedITem: Moment(nextProps.value, this.props.dateFormat).toDate() })
            }
            this.setState({ seletedItemText: selectedItemText })
        }
        return true;
    }

    show() {
        this.setState({ show: true })
    }

    renderPicker = () => {
        const { selectedITem } = this.state;
        const { minimumDate, maximumDate, androidDisplay, locale } = this.props
        return (
            <RNDateTimePicker
                value={selectedITem}
                mode={'date'}
                minimumDate={minimumDate}
                locale={locale}
                maximumDate={maximumDate}
                display={androidDisplay}
                onChange={this.setDate}
            />
        )
    }

    render() {
        const { doneTitleIOS, itemDisplay = true, modalAnimationIOS, label, cancelTitleIOS, dateFormat, darkMode } = this.props;
        const { show, seletedItemText } = this.state;
        return (
            <>
                {
                    itemDisplay &&
                    <InputItemText
                        onPress={() => { this.show() }}
                        label={label}
                        seletedItemText={seletedItemText}
                    />
                }
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