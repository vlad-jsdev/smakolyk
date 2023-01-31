import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import Cross from '../assets/images/cross.svg'

const ItemLikes = ({title, img, price, delEl}) => {
	return(
		<View style={{
			backgroundColor: 'white',
			flexDirection: "row",
			justifyContent: 'space-between',
			alignItems: 'center',
			height: 102,
			marginHorizontal: 23,
			borderRadius: 20,
			paddingHorizontal: 21,
			marginVertical: 10
		}}>
			<View style={{
			}}>
				<Image
					source={img}
					style={{
						height: 80,
						width: 80
					}}
				/>
			</View>
			<View style={{
				marginRight: 60
			}}>
				<Text style={{
					fontFamily: 'Poppins-Bold',
					fontSize: 17
				}}>{title}</Text>
				<Text style={{
					fontFamily: 'Poppins-Bold',
					fontSize: 15,
					color: '#F1CC49'
				}}>{price} грн</Text>
				
			</View>
			<Pressable onPress={() => delEl()}>
				<Cross />
			</Pressable>
		</View>
	)
}

export default ItemLikes
