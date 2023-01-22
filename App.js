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
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomNavigator from './components/BottomNavigator'

import 'react-native-gesture-handler';

import Register from './pages/Register';
import Login from './pages/Login';
import RegisterNavigator from './components/RegisterNavigator';
import Home from './pages/Home';
import Main from './pages/Main';
import Likes from './pages/Likes';
import Profile from './pages/Profile';
import Backet from './pages/Backet';

import HomeSvg from './assets/images/menu/home.svg'

const TabBottom = createBottomTabNavigator();
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
      <SafeAreaProvider style={{}}>
      <NavigationContainer>
        {!isLogin ? (
            <TabBottom.Navigator
              tabBar={props => <BottomNavigator {...props}/>}
              // tabBarActiveTintColor: 'tomato',
              // tabBarInactiveTintColor: 'gray',
              // initialRouteName="Home"
              // activeColor={'#D4A608'}
              // inactiveColor={'gray'}
              // labeled={false}
              // // activeColor="#e91e63"
              // barStyle={{ backgroundColor: 'tomato' }}

            >
              <TabBottom.Screen name="Home" component={Home} 
                options={{ headerShown: false }}
               />
              <TabBottom.Screen name="Likes" component={Likes} 
                options={{ headerShown: false }}/>
              <TabBottom.Screen name="Profile" component={Profile} 
                options={{ headerShown: false }}/>
              <TabBottom.Screen name="Basket" component={Backet} 
                options={{ headerShown: false }}/>
            </TabBottom.Navigator>

        ) : (
            <Tab.Navigator tabBar={props => <RegisterNavigator {...props} />}>
              <Tab.Screen name="Вхід" component={Login} />
              <Tab.Screen name="Реєстрація" component={Register} />
            </Tab.Navigator>
        )}
        </NavigationContainer>
      </SafeAreaProvider>
    </LoginContext.Provider>
  );
};

export default App;
