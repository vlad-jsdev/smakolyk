import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

const ItemSearch = ({title, price, img, infoDish}) => {
	const navigation = useNavigation()

	return(
				<TouchableOpacity style={styles.boxWrap} onPress={() => navigation.navigate('Страва', {
					title: title, 
					price: price, 
					img: img,
					infoDish: infoDish
				})}>
					<View style={styles.boxImg}>
						<Image
							source={img}
							style={styles.imageStyle}
						/>
					</View>
					<View style={styles.infoText}>
						<Text style={styles.text}>{title}</Text>
						<Text style={styles.price}>{price} грн</Text>
					</View>
				</TouchableOpacity>
			)
}

const styles = StyleSheet.create({
	boxWrap: {
		width: 150,
		height: 200,
		marginTop: 87,
		marginHorizontal: 20,
		borderRadius: 27,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	},
	boxImg: {
		position: 'absolute',
		width: 120,
		height: 120,
		top: -50,
		alignSelf: 'center',
		marginHorizontal: 'auto',
		borderRadius: 27,
		backgroundColor: 'white'
	},
	imageStyle: {
		width: 120, 
		height: 120, 
		borderRadius: 27
	},
	text: {
		fontFamily: 'Poppins-bold',
		fontWeight: '700',
		fontSize: 15,
		alignSelf: 'center',
		alignContent: 'center',
		textAlign: 'center',
		lineHeight: 20
	},
	price: {
		fontFamily: 'Poppins-bold',
		fontWeight: '700',
		alignSelf: 'center',
		color: '#EBC540',
		marginTop: 13,
		marginBottom: 35
	},
	infoText: {
		position: 'absolute',
		width: 120,
		bottom: 0
	}
})
export default ItemSearch
