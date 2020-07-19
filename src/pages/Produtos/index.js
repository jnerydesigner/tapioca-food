import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import bg from '../../assets/imagens/home-screen.png';
import logoHeader from '../../assets/imagens/logo-header.png';
import logo from '../../assets/imagens/logo-tapioca-food.png';
import styles from './style';
import foodData from '../../../foodData';

export default function Produtos({route}) {
    const navigation = useNavigation();
    const [contar, setContar] = useState(0);
    const [idFood, setIdFood] = useState(0);
    const [cliente, setCliente] = useState(route.params.name);
 
    function handleFood(id){
        setIdFood(id);
        setContar(contar + 1)
    }

    function goToHome(){
        navigation.navigate('HomePrincipal');
    }

    function goToProduct(food, cliente){
        navigation.navigate('Produto', {
            cliente,
            food
        });
    }
    
    const foodItem = (food) => {
        return (
            <TouchableOpacity
            style={styles.btnImagem, {backgroundColor:food.backgroundColor, marginTop:10}}
            onPress={() => goToProduct(food, cliente)}>
                <View>
        <Text style={styles.title}>{food.title}</Text>
                </View>
                <Image style={styles.imgFood} source={food.cover} />
            </TouchableOpacity>
        );
    }

    //function 

    function goToBack() {
        navigation.navigate('Produtos');
    }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goToBack} style={styles.btnBack}>
                    <AntDesign name="arrowleft" size={30} color="black" />
                </TouchableOpacity>
                <Image source={logo} style={styles.logoHeader} />
                <TouchableOpacity onPress={goToHome} style={styles.btnBack}>
                    <Entypo name="home" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.clientView}>
                <Text style={styles.textClient}>{cliente}</Text>
            </View>
            <SafeAreaView style={styles.containerFlat}>
                <FlatList
                    style={styles.listFood}
                    data={foodData}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => foodItem(item)}
                />
            </SafeAreaView>
        </View>
    );
}