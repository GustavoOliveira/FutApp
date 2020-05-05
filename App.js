import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import Campeonatos from './src/pages/Campeonatos'
import Fases from './src/pages/Fases'
import Jogos from './src/pages/Jogos'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Campeonatos">
        <Stack.Screen 
          name="Campeonatos" 
          component={Campeonatos}
          options={{
            title : "Campeonatos",
            headerTitleAlign: "center",
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            
          }}
        />

        <Stack.Screen 
          name="Fases" 
          component={Fases}
          options={{
            title : "Fases",
            headerTitleAlign: "center",
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            
          }}
        />

        <Stack.Screen 
          name="Jogos" 
          component={Jogos}
          options={{
            title : "Jogos",
            headerTitleAlign: "center",
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            
          }}
        />
       </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
