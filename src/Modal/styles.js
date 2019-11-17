import { StyleSheet } from 'react-native';

const theme = {
    light: {
        picker: {
            backgroundColor: 'rgb(200,202,210)'
        },
        modalBtnContainer: {
            backgroundColor: 'rgb(249,249,246)'
        },
        item: {}
    },
    dark: {
        picker: {
            backgroundColor: '#000'
        },
        modalBtnContainer: {
            backgroundColor: '#323234'
        },
        item: {
            color: 'white'
        }
    }
};

const styles = StyleSheet.create({
    picker: {
        height: 200,
        width: '100%'
    },
    modal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    modalStart: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    modalBtnContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 5
    },
    btnCancelContainer: {
        alignItems: 'flex-start',
        flex: 1
    },
    btnDoneContainer: {
        alignItems: 'flex-end',
        flex: 1
    }
});

export {
    styles, theme
}