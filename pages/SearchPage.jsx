import { useEffect } from "react";
import { View, SafeAreaView, Text } from "react-native"
import { Button } from "react-native-paper"
import BackSvg from "../assets/images/search/back.svg"
import Back from "../components/Back";
import { LinearGradientText } from "react-native-linear-gradient-text";
import ListSearch from "../components/ListSearch";


const SearchPage = ({navigation, route}) => {
	useEffect(() => {
		navigation.getParent()?.setOptions({
			tabBarStyle: { display: 'none' },
		  });
	}, [])
	
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#3F3F3E" }}>
			<View style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginHorizontal: 24,
							marginVertical: 32
						}}>
				<View style={{flexDirection: 'row'}}>
				<Back navigation={navigation} />
				<View style={{
					alignSelf: 'center',
					left: 7,
					borderRightWidth: 1,
					paddingRight: 17,
					borderColor: 'white'
				}}>
				<Text style={{
					alignSelf: 'center',
					left: 7,
					fontFamily: 'Poppins-Bold',
					fontSize: 24,
					color: 'white'
				}}>{route.params.searchText}</Text>
				</View>
				</View>
				<View style={{
				}}>
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
			</View>
			<ListSearch findDishes={route.params.findDishes}/>
		</SafeAreaView>
	)
}

export default SearchPage
