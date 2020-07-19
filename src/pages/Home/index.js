import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

import bg from '../../assets/imagens/home-screen.png';
import logo from '../../assets/imagens/logo-tapioca-food.png';
import styles from './style';

export default function Home() {

    const navigation = useNavigation();
    function goToLogin(){
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={bg} style={styles.bg}>
                <View style={styles.containerLogo}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <TouchableOpacity onPress={goToLogin} style={styles.btnLogin}>
                    <Text style={styles.textLogin}>Logar</Text>
                </TouchableOpacity>
            </ImageBackground>
            <StatusBar style="light" />
        </View>
    );
}