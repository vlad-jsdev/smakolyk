import React, {useState, useContext} from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import ButtonMain from "../components/ButtonMain";
import InputLogin from "../components/InputLogin";
import {user} from '../mock/data.js'
import { LoginContext } from "../App";
import Search from "../components/Search";
import Menu from "../components/Menu";
import { LinearGradientText } from "react-native-linear-gradient-text";

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
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{
				flex: 1,
				backgroundColor: "#1E1E1E"
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
			</View>
		</SafeAreaView>
	)
}

export default Home
