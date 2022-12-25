import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const ButtonMain = ({text}) => {
	return (
		<Pressable style={styles.button}>
			<Text style={styles.text}>{text}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
	  alignItems: 'center',
	  justifyContent: 'center',
	  paddingVertical: 22,
	  marginHorizontal: 23,
	  borderRadius: 30,
	  backgroundColor: '#F2C94C',
	},
	text: {
	  fontSize: 17,
	  fontWeight: 'bold',
	  color: 'white',
	},
  });

export default ButtonMain;
