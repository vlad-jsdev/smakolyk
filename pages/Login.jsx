import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';

import ButtonMain from "../components/ButtonMain";

const Login = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ButtonMain
				text = "Увійти"
			/>
		</SafeAreaView>
	)
}

export default Login
