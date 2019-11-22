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
        this.props.onValueChange(this.getDate(selectedITem))
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
            if (event.type == 'dismissed') {
                //dismissed
            }
            else {
                this.props.onValueChange(this.getDate(date))
                this.setState({
                    seletedItemText: this.getDate(date)
                })
            }
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

    UNSAFE_componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.value != this.props.value) {
            let selectedItemText = ''
            let selectedItem = ''
            if (nextProps.value) {
                selectedItemText = this.getDate(nextProps.value);
                selectedItem = Moment(nextProps.value, this.props.dateFormat).toDate()
            }
            else {
                selectedItemText = this.props.placeHolder;
                selectedItem = new Date();
            }

            this.setState({
                seletedItemText: selectedItemText,
                selectedITem: selectedItem
            })
        }
    }

    show() {
        if (this.props.value != "") {
            let selectedITem = Moment(this.props.value, this.props.dateFormat).toDate()
            this.setState({ show: true, selectedITem: selectedITem })
        }
        else {
            this.setState({ show: true, selectedITem: new Date() })
        }
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