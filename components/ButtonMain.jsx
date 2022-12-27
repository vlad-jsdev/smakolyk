import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

const ButtonMain = ({text, buttonPress}) => {
	return (
		<Pressable style={styles.button} onPress={buttonPress}>
			<Text style={styles.text}>{text}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		height: 70,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 22,
		marginHorizontal: 23,
		borderRadius: 30,
		backgroundColor: '#F2C94C',
		marginBottom: 50
	},
	text: {
		fontSize: 17,
		fontWeight: 'bold',
		color: 'white',
	},
  });

export default ButtonMain;
