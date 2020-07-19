
import { StyleSheet, StatusBar } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00cec9',
        alignItems: 'center'
    },
    header: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#fbc531',
        height: 100,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
    },
    content: {
        marginTop: 5,
        backgroundColor: '#fd79a8',
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        color: '#ffff'
    },
    logo: {
        height: 80,

    },
    logoHeader: {
        width: '35%',
        height: '100%'

    },
    btnBack: {
        padding: 10
    },
    listFood: {
        flex: 1,
        marginTop: 10,
        width: '100%',
        marginHorizontal: 20,
    },
    btnImagem: {
        width: '100%',
        marginTop: 20,
        marginBottom: 30,
        position: 'relative'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
    imgFood: {
        width: 400,
        height: 300,
    },
    containerFlat: {
        marginBottom: 130
    },
    btnLogin: {
        width: '80%',
        height: 60,
        backgroundColor: '#ff9a15',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    InputForm: {
        backgroundColor: '#fff',
        width: 320,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5
    },
    containerInputName: {
        width: '100%',
        height: '80%',
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
        color: '#fff'
    },
    clientTitle:{
        marginBottom:10,
        textAlign:'center',
        fontSize:25
    }
});