import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";


const InputLogin = ({text, setText, placeholderText, title, type, secure, marTop, marBottom}) => {
	return (
		<View style={{
			marginHorizontal: 23,
			flexDirection: 'column',
			justifyContent: "center",
			marginTop: marTop || 0,
			marginBottom: marBottom || 0
			}}>
			<Text style={styles.text}>{title}</Text>
			<TextInput
				autoCapitalize={'none'}
				style={styles.input}
				onChangeText={setText}
				value={text}
				placeholder={placeholderText}
				textContentType={type}
				secureTextEntry={secure}
			/>
		</View>)
}

const styles = StyleSheet.create({
	input: {
		fontFamily: 'Poppins-Regular',
		fontSize: 17,
		height: 40,
		borderBottomWidth: 0.5,
	  },
	  text: {
		fontFamily: 'Poppins-Regular',
		fontSize: 15,
		color: "#999999",
		marginBottom: 5
	  }
})
export default InputLogin
