import React from "react";
import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';

let width = Dimensions.get('window').width; //full width

const DishesTabButtons = () => {
	const navigation = useNavigation()
	return (
		<View style={styles.box}>
			<Pressable style={styles.buttons} onPress={() => navigation.navigate('Login')}>
				<Text style={styles.text}>Їжа</Text>
			</Pressable>
			<Pressable style={styles.buttons} onPress={() => navigation.navigate('Register')}>
				<Text style={styles.text}>Напої</Text>
			</Pressable>
			<Pressable style={styles.buttons} onPress={() => navigation.navigate('Login')}>
				<Text style={styles.text}>Ланчі</Text>
			</Pressable>
			<Pressable style={styles.buttons} onPress={() => navigation.navigate('Register')}>
				<Text style={styles.text}>Супи</Text>
			</Pressable>
		</View>
	)
}


const styles = StyleSheet.create({
	box: {
		width: width,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	buttons: {
		width: 134,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 3	
	},
	text: {
		fontFamily: 'Poppins-Bold',
		fontSize: 18

	}
})
export default DishesTabButtons;
