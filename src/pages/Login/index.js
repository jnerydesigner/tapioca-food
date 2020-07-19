import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Text, View, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';

import bg from '../../assets/imagens/home-screen.png';
import logo from '../../assets/imagens/logo-tapioca-food.png';
import styles from './style';

export default function Login() {
    const navigation = useNavigation();

    function goToProducts(){
        navigation.navigate('Produtos');
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.InputForm}
                    placeholder="Login"
                    autoCorrect={false}
                    onChangeText={() => {}}
                />
                <TextInput
                    style={styles.InputForm}
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={() => {}}
                />
                <TouchableOpacity onPress={goToProducts} style={styles.btnSubmit}>
                    <Text style={styles.texto}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}