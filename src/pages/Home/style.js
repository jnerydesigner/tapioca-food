import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
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
    containerLogo:{
        height:'85%',
        justifyContent:'center',
        width:'100%',
        alignItems: 'center'
    }
});