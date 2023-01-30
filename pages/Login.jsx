import React, {useState, useContext} from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import ButtonMain from "../components/ButtonMain";
import InputLogin from "../components/InputLogin";
import {user} from '../mock/data.js'
import { LoginContext } from "../App";

const Login = () => {
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
		<SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
			<View>
				<InputLogin marTop={32} text={currentMail} placeholderText="example@gmail.com" setText={onInputMail} title="Почта" secure={false} type="mail"/>
				<InputLogin marTop={40} text={currentPass} placeholderText="Password" setText={onInputPass} title="Пароль" secure={true} type="password" />
				<Pressable 
					style={{
						marginTop: 50,
						alignItems: 'center'
					}}
					onPress={() => {}}
				>
					<Text 
						style={{
							fontFamily: 'Poppins-Regular',
							fontSize: 17,
							color: "#FFD748"
						}}
					>Відновити пароль</Text>
				</Pressable>
			</View>	
			<ButtonMain
				text = "Увійти"
				buttonPress={loginPress}
				paddingH={22} 
				paddingV={23}
				marginB={50}
			/>
		</SafeAreaView>
	)
}

export default Login
