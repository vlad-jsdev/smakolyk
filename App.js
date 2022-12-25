/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';

import LoginMain from './pages/LoginMain';
import Register from './pages/Register';
import Login from './pages/Login';
import RegisterNavigator from './components/RegisterNavigator';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider style={{top: 40}}>
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <RegisterNavigator {...props} />}>
          <Tab.Screen name="Вхід" component={Login} />
          <Tab.Screen name="Реєстрація" component={Register} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
