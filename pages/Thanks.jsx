import { useEffect, useState } from "react"
import { View, Text, SafeAreaView } from "react-native"
import {dishesData} from "../mock/data"
import SliderDishes from '../components/SliderDishes'
import ButtonMain from "../components/ButtonMain"
import Back from "../components/Back"
import Logo from "../assets/images/logo.svg"



const Thanks = ({navigation}) => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#3F3F3E'}}>
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
				
			</View>
			<View style={{
				flex: 1,
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<Text style={{
					fontFamily: 'Poppins-Bold',
					fontSize: 30,
					color: '#FFD748'
				}}>
					Дякую за довіру!
				</Text>
				<Logo height={115} />
			</View>
		</SafeAreaView>
	)
}

export default Thanks
