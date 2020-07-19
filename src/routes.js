import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import Home from './pages/Home';
import Login from './pages/Login';
import Produtos from './pages/Produtos';
import Produto from './pages/Produto';
import HomePrincipal from './pages/HomePrincipal';

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="HomePrincipal" component={HomePrincipal} />
                <Stack.Screen name="Produtos" component={Produtos} />
                <Stack.Screen name="Produto" component={Produto} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}