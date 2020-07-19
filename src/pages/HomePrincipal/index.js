import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useContext} from 'react';
import {TextInput, KeyboardAvoidingView, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/imagens/logo-tapioca-food.png';
import styles from './style';

export default function HomePrincipal() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    function goToBack() {
        navigation.navigate('Produtos');
    }

    function goToFood(){
        navigation.navigate('Produtos', {name});
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>               
                <Image source={logo} style={styles.logoHeader} />
            </View> 
            <KeyboardAvoidingView style={styles.containerInputName}>
            
            <View style={styles.containerInput}>
                <Text style={styles.clientTitle}>
                    Digite o Nome do Cliente
                </Text>
           
                <TextInput
                    style={styles.InputForm}
                    placeholder="Nome Cliente"
                    autoCorrect={false}
                    onChangeText={(val) => setName(val)}
                />
                <TouchableOpacity onPress={goToFood} style={styles.btnSubmit}>
                    <Text style={styles.texto}>Nome Cliente</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>         
        </View>
    );
}