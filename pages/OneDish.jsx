import { Text, View, SafeAreaView } from "react-native"
import { LinearGradientText } from "react-native-linear-gradient-text";

import Back from "../components/Back"
import Like from "../assets/images/like.svg"
import ItemInfo from "../components/ItemInfo";

const OneDish = ({navigation, route}) => {
	return(
		<SafeAreaView style={{ flex: 1, backgroundColor: "#3F3F3E" }}>
			<View style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginHorizontal: 24,
							marginVertical: 32
						}}>
				<View style={{flexDirection: 'row'}}>
				<Back navigation={navigation} />
				
				</View>
				<View>
				<LinearGradientText 
					start={{x: 0, y: 0}} 
					end={{x: 1, y: 0}} 
					colors={['#928F8F', '#DEDEDE']}
					text="Smakolyk"
					textStyle={{
						fontFamily: "Poppins-Bold",
						fontSize: 28
					}}
				/>
				</View>
				<View style={{alignSelf: 'center'}}>
				<Like />
				</View>
			</View>
			<ItemInfo info={route.params}/>
		</SafeAreaView>
	)
}

export default OneDish
