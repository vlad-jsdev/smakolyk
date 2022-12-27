/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {createContext, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';

import Register from './pages/Register';
import Login from './pages/Login';
import RegisterNavigator from './components/RegisterNavigator';
import Home from './pages/Home';

const Tab = createMaterialTopTabNavigator();
export const LoginContext = createContext();

const App = () => {
  const [isLogin, setLogin] = useState(false);
  const changeLogin = login => {
    setLogin(login);
    console.log('Login: ', login);
  };
  return (
    <LoginContext.Provider value={{changeLogin, isLogin}}>
      <SafeAreaProvider style={{top: 40}}>
        {isLogin ? (
          <Home />
        ) : (
          <NavigationContainer>
            <Tab.Navigator tabBar={props => <RegisterNavigator {...props} />}>
              <Tab.Screen name="Вхід" component={Login} />
              <Tab.Screen name="Реєстрація" component={Register} />
            </Tab.Navigator>
          </NavigationContainer>
        )}
      </SafeAreaProvider>
    </LoginContext.Provider>
  );
};

export default App;
