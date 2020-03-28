/**
 * Para utilizar o routing (navegar entre rotas no aplicativo)
 * instalar a dependencia, ver em:
 * https://reactnavigation.org/docs/getting-started/
 * Observar os tipos disponíveis de navegação na doc.
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Details from './pages/Details';

export default function Routes() {
    return (
        //Essencial que o NavigationContainer venha sobre as rotas.
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name='Incidents' component={Incidents} />
                <AppStack.Screen name='Details' component={Details} />
            </AppStack.Navigator>
        </NavigationContainer>

    );
}