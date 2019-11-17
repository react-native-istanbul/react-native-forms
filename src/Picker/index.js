import React from 'react'
import { NativeModules, Picker as RnPicker, Platform } from 'react-native'
import { theme } from './styles'
import Modal from '../Modal'
import { InputItemText } from '../InputItem'
import PropTypes from 'prop-types'

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
    return null;
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

    getPropsToTheme() {
        return this.props.darkMode ? 'dark' : 'light';
    }

    renderPicker = () => {
        const { data } = this.props;
        const { selectedITem } = this.state;
        return (
            <RnPicker
                itemStyle={theme[this.getPropsToTheme()].item}
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
        const { doneTitleIOS, darkMode, modalAnimationIOS, cancelTitleIOS, label, data, onValueChange } = this.props;
        const { show, seletedItemText } = this.state;
        return (
            <React.Fragment>
                <InputItemText
                    label={label}
                    seletedItemText={seletedItemText}
                    onPress={() => { this.show() }}
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

Picker.propTypes = {
    modalAnimationIOS: PropTypes.bool,
    doneTitleIOS: PropTypes.string,
    visible: PropTypes.bool,
    value: PropTypes.string
}