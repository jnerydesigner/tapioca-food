import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect}from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import bg from '../../assets/imagens/home-screen.png';
import logoHeader from '../../assets/imagens/logo-header.png';
import logo from '../../assets/imagens/logo-tapioca-food.png';
import styles from './style';
import foodData from '../../../foodData';

export default function Produto({route}) {
    const navigation = useNavigation();

    const { food } = route.params;



    function goToBack() {
        navigation.navigate('Produtos');
    }

    useEffect(() => {
        console.log(food);
    },[])



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goToBack} style={styles.btnBack}>
                    <AntDesign name="arrowleft" size={30} color="black" />
                </TouchableOpacity>
                <Image source={logo} style={styles.logoHeader} />
                <TouchableOpacity onPress={goToBack} style={styles.btnBack}>
                    <Entypo name="home" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.contentFood}>
                <View style={styles.contentImgFood}>
                    <Image style={styles.imgFood} source={food.cover} />
                </View>
            </View>
        </View>
    );
}