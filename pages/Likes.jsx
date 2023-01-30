import { View, SafeAreaView, Text } from "react-native"
import Back from '../components/Back'

const Likes = ({navigation, route}) => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#3F3F3E" }}>
			<View style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginHorizontal: 24,
							marginVertical: 32,
							alignItems: 'center'
						}}>
				<View style={{flexDirection: 'row'}}>
				<Back navigation={navigation} />
				
				</View>
				<View>
				<Text style={{
					alignSelf: 'center',
					fontFamily: 'Poppins-Bold',
					fontSize: 24,
					color: 'white'
				}}>
					Обране
				</Text>
				{/* <LinearGradientText 
					start={{x: 0, y: 0}} 
					end={{x: 1, y: 0}} 
					colors={['#928F8F', '#DEDEDE']}
					text="Smakolyk"
					textStyle={{
						fontFamily: "Poppins-Bold",
						fontSize: 28
					}}
				/> */}
				</View>
				<View style={{width: 30}}>
				{/* <Like /> */}
				</View>
			</View>
			{/* <ItemInfo info={route.params}/> */}
		</SafeAreaView>
	)
} 
export default Likes
