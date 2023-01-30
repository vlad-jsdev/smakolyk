import { View, Text, StyleSheet, Image } from "react-native"

const ItemDish = ({title, img, price, infoDish}) => {
	return(
		<View style={styles.boxWrap}>
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
		</View>
	)
}

const styles = StyleSheet.create({
	boxWrap: {
		width: 190,
		height: 236,
		marginTop: 87,
		marginHorizontal: 15,
		borderRadius: 27,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	},
	boxImg: {
		position: 'absolute',
		width: 145,
		height: 145,
		top: -50,
		alignSelf: 'center',
		marginHorizontal: 'auto',
		borderRadius: 27,
		backgroundColor: 'white'
	},
	imageStyle: {
		width: 145, 
		height: 145, 
		borderRadius: 27
	},
	text: {
		fontFamily: 'Poppins-bold',
		fontWeight: '700',
		fontSize: 19,
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
export default ItemDish
