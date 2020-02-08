import React, { Component } from 'react'
import ModalList from '../ModalList'
import { InputItemText, InputItemBody } from '../InputItem'

export default class PickerList extends Component {
    state = {
        showModal: false,
        seletedItemText: ''
    }

    updateValue(value) {
        const { data } = this.props
        const item = data.find(x => x.value == value)
        if (item) {
            this.setState({ seletedItemText: item.key })
        }
        else {
            this.setState({ seletedItemText: '' })
        }
    }

    componentDidMount() {
        const { data, value } = this.props
        if (data)
            this.updateValue(value)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.value != this.props.value)
            this.updateValue(nextProps.value)
    }

    render() {
        const { type, headerTitle, value, androidStatusBarColor, headerbackgroundColor, separatorTitle, iosBarStyle, onChange, data, label } = this.props
        return (
            <>
                <ModalList
                    type={type}
                    headerTitle={headerTitle}
                    androidStatusBarColor={androidStatusBarColor}
                    value={value}
                    headerbackgroundColor={headerbackgroundColor}
                    iosBarStyle={iosBarStyle}
                    valueText={(selectedItemText) => { this.setState({ seletedItemText: selectedItemText }) }}
                    onPress={onChange}
                    show={this.state.showModal}
                    data={data}
                    close={() => { this.setState({ showModal: false }) }}
                />
                {
                    separatorTitle ?
                        <InputItemBody
                            onPress={() => { this.setState({ showModal: true }) }}
                            seletedItemText={this.state.seletedItemText}
                        />
                        :
                        <InputItemText
                            label={label}
                            onPress={() => { this.setState({ showModal: true }) }}
                            seletedItemText={this.state.seletedItemText}
                        />
                }
            </>
        )
    }
}