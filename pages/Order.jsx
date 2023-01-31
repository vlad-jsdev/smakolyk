import { useEffect, useState } from "react"
import { View, SafeAreaView, Text } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import Back from '../components/Back'
import ItemLikes from "../components/ItemLikes"
import {dishesData} from '../mock/data'
import ButtonMain from '../components/ButtonMain'
import Swipe from '../assets/images/swipe.svg'
import RadioGroup from 'react-native-radio-buttons-group';


const Order = ({navigation, route}) => {
	const [radioButtons, setRadioButtons] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Option 1',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Option 2',
            value: 'option2'
        }
    ]);
	const onPressRadioButton = (radioButtonsArray) => {
        setRadioButtons(radioButtonsArray);
    }
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
					Сторінка замовлення
				</Text>
				</View>
				<View style={{width: 10}}>
				</View>
			</View>
			<View style={{
				alignSelf: 'center',
				marginBottom: 25
			}}>
			</View>
			<View style={{
				marginHorizontal: 23
			}}
			>
				<Text style={{
					fontFamily: 'Poppins-Bold',
					fontSize: 17,
					color: 'white'
				}}>
					Метод оплати
				</Text>
				<View style={{
					marginTop: 15,
					height: 150,
					backgroundColor: "white",
					borderRadius: 20
				}}
				>
					<RadioGroup 
						radioButtons={radioButtons} 
						onPress={onPressRadioButton} 
						style={{
							color: 'red'
						}}
					/>
				</View>
			</View>
			<View style={{
				alignSelf: 'center',
				marginBottom: 20
				}}>
				{/* <ButtonMain 
					text={'Замовити'}
					buttonPress={navigation.navigate('Замовлення')}
					height={50} 
					width={224}
					paddingV={null} 
					paddingH={0}
					marginB={20}
				/> */}
			</View>
		</SafeAreaView>
	)
} 
export default Order
