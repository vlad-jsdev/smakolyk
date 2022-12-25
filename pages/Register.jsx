import React from "react";
import { View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import ButtonMain from "../components/ButtonMain";

const Register = () => {
	return (<SafeAreaView style={{ flex: 1 }}>
				<ButtonMain
					text = "Зареєструватися"
				/>
			</SafeAreaView>
	)
}

export default Register
