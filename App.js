/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {createContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SearchPage from './pages/SearchPage';

import 'react-native-gesture-handler';

import Register from './pages/Register';
import Login from './pages/Login';
import RegisterNavigator from './components/RegisterNavigator';
import BottomNavigationStack from './components/BottomNavigationStack';
import OneDish from './pages/OneDish';
import Order from './pages/Order';
import Thanks from './pages/Thanks';

const Tab = createMaterialTopTabNavigator();
export const LoginContext = createContext();
const Stack = createNativeStackNavigator();

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
          {isLogin ? (
            <Stack.Navigator>
              <Stack.Screen
                name="HomeMain"
                options={{headerShown: false}}
                component={BottomNavigationStack}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Пошук"
                component={SearchPage}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Страва"
                component={OneDish}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Замовлення"
                component={Order}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Дякую"
                component={Thanks}
              />
            </Stack.Navigator>
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
