import React from 'react'
import { View, Modal as RNModal, Button as RnButton } from 'react-native'
import { styles, theme } from './styles'

export default class Modal extends React.Component {

    getPropsToTheme() {
        return this.props.darkMode ? 'dark' : 'light';
    }

    render() {
        const { doneTitleIOS, closeOnPress, doneOnPress, show, modalAnimationIOS, cancelTitleIOS, children } = this.props;

        return (
            <RNModal transparent={true} visible={show} animated={modalAnimationIOS}>
                <View onTouchStart={() => { closeOnPress() }} style={styles.modalStart} />
                <View>
                    <View style={[styles.modalBtnContainer, theme[this.getPropsToTheme()].modalBtnContainer]}>
                        <View style={styles.btnCancelContainer}>
                            <RnButton onPress={closeOnPress} title={cancelTitleIOS} />
                        </View>
                        <View style={styles.btnDoneContainer}>
                            <RnButton onPress={doneOnPress} title={doneTitleIOS} />
                        </View>
                    </View>
                    <View
                        style={[styles.picker, theme[this.getPropsToTheme()].picker]}
                    >
                        {children}
                    </View>
                </View>
            </RNModal>
        )
    }
}