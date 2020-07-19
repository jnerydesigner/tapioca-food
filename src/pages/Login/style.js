import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00cec9',
    },
    bg: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    },
    logo: {
        width: '100%',
        paddingLeft: 10,
        paddingHorizontal: 10,
    },
    btnLogin: {
        width: '80%',
        height: 60,
        backgroundColor: '#ff9a15',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLogin: {
        fontSize: 25,
        color: '#ffff'
    },
    containerLogo: {
        height: '55%',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },
    InputForm: {
        backgroundColor: '#fff',
        width: 320,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5
    },
    containerInput: {
        width: '100%',
        height: '45%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSubmit: {
        width: 320,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6c5ce7',
        height: 50
    },
    texto: {
      fontSize: 20,
      color:'#fff'
    },
});