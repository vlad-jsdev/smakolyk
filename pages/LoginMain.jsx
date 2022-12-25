import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Logo from '../assets/images/logo.svg'; 
import Login from "./Login";
import Register from "./Register";
import LoginTabButtons from "../components/LoginTabButtons";
import RegisterNavigator from "../components/RegisterNavigator";

const Tab = createMaterialTopTabNavigator();


const LoginMain = () => {
	return (
		<Tab.Navigator tabBar={props => <RegisterNavigator {...props} />}>
			<Tab.Screen name="Login" component={Login} />
			<Tab.Screen name="Register" component={Register} />	
		</Tab.Navigator>
		// <NavigationContainer>
		// 	<View style={styles.topBanner}>
		// 			<Text style={styles.bannerText}>Smakolyk</Text>
		// 			<Logo height={115} />
		// 			<View style={styles.bannerButtons}>
		// 				<LoginTabButtons />
		// 			</View>
		// 		</View>
		// 		<Tab.Navigator>
		// 				<Tab.Screen name="Login" component={Login} />
		// 				<Tab.Screen name="Register" component={Register} />		
		// 		</Tab.Navigator>
		// </NavigationContainer>

	);
}

const styles = StyleSheet.create({
	topBanner: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 300,
		borderRadius: 15,
		backgroundColor: '#FFD748'
	},
	bannerButtons: {
		position: 'absolute',
		bottom: 0
	},
	bannerText: {
		fontFamily: 'Poppins-Bold',
		fontSize: 45
	},
	bannerLogo: {

	}
})

export default LoginMain;
