import React, {useState, useContext} from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import ButtonMain from "../components/ButtonMain";
import InputLogin from "../components/InputLogin";
import {NavigationContainer} from '@react-navigation/native';
import {user} from '../mock/data.js'
import { LoginContext } from "../App";
import Search from "../components/Search";
import Menu from "../components/Menu";
import { LinearGradientText } from "react-native-linear-gradient-text";
import DishesNavigator from '../components/DishesNavigator';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Dishes from "./Dishes";
import SearchPage from "./SearchPage";

const Tab = createMaterialTopTabNavigator();

const Home = () => {
	const [currentMail, setCurrentMail] = useState('');
	const [currentPass, setCurrentPass] = useState('');
	const login = useContext(LoginContext);

	const onInputMail = (text) => {
	  setCurrentMail(text)
	};
	const onInputPass = (text) => {
	  setCurrentPass(text)
	};
	const loginPress = () => {
		if (user.mail === currentMail && user.password === currentPass){
			login.changeLogin(true)
		}
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#3F3F3E" }}>
			<View style={{
				flex: 1
			}}>
				<View style={{
					marginTop: 37,
					flexDirection: "row",
					justifyContent: 'space-around',
					marginBottom: 35
				}}>
				<View style={{position: 'absolute',
				left: 23,
			}}>
				<Menu />
				</View>
				<LinearGradientText 
					start={{x: 0, y: 0}} 
					end={{x: 1, y: 0}} 
					colors={['#928F8F', '#DEDEDE']}
					text="Smakolyk"
					textStyle={{
						fontFamily: "Poppins-Bold",
						fontSize: 32
					}}
				/>
				</View>
				<Search />
				<NavigationContainer independent={true}>
					<Tab.Navigator tabBar={props => <DishesNavigator {...props} />}>
					<Tab.Screen 
						name="Їжа" 
						children={() => <Dishes tabTitle="Їжа" />}
					/>
					<Tab.Screen 
						name="Напої" 
						children={() => <Dishes tabTitle="Напої" />} 
					/>
					<Tab.Screen 
						name="Ланчі" 
						children={() => <Dishes tabTitle="Ланчі" />} 
					/>
					<Tab.Screen 
						name="Супи" 
						children={() => <Dishes tabTitle="Супи" />}
					/>
					</Tab.Navigator>
          		</NavigationContainer>
			</View>
		</SafeAreaView>
	)
}

export default Home
