import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#C4C4C4',
    },

    subContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    subContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 18,
        fontWeight: 400,
        marginTop: 20,
        marginRight: 20
    },

    btn: {
        backgroundColor: '#2a1177',
        width: 120,
        height: 40,
        marginLeft: 30,
        marginBottom: 60,
        borderColor: '#2a1177',
        borderWidth: 1,
        borderRadius: 10,
    },

    containerResponsive: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#C4C4C4',
    },

    textTitle: {
        fontSize: 24,
        fontWeight: 500,
        color: 'black',
    },

    textResponsive: {
        fontSize: 18,
        fontWeight: 400,
        marginTop: 20,
        textAlign: 'center'
    },

    textTitleResponsive: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 500,
        color: 'black',
        padding: 20
    },

    btnResponsive: {
        backgroundColor: '#2a1177',
        width: 120,
        height: 40,
        borderColor: '#2a1177',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
    }
})