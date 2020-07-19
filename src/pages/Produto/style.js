
import { StyleSheet, StatusBar } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00cec9',
        alignItems:'center'
    },
    header:{
        marginTop: StatusBar.currentHeight,
        backgroundColor:'#ffff',
        height:100,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    content:{
        marginTop:5,
        backgroundColor:'#fd79a8',
        height:100,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize: 30,
        color: '#ffff'
    },
    logo:{
        height:80,
        
    },
    logoHeader:{
        width:'35%',
        height:'100%'
        
    },
    btnBack:{
        padding:10
    },
    listFood:{
        flex:1,
        marginTop:10,
        width:'100%',
        marginHorizontal: 20,
    },
    btnImagem:{
        width:'100%',
        marginTop:20,
        marginBottom:30,
        position:'relative'
    },
    title:{
        fontSize:30,
        textAlign:'center'
    },
    imgFood:{
        width:'100%',
        height:320,
    },
    containerFlat:{
        marginBottom:130
    },
    clientView:{
        justifyContent:'center',
        alignItems: 'center',
        marginBottom:10,
        marginTop: 10,
        width:'100%',
        backgroundColor:'#ffff',
        padding:10
    },
    textClient:{
        fontSize:30
    },
    contentFood:{
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentImgFood:{
        width:'100%'
    }
});