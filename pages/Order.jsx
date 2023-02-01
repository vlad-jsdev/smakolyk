import { useState } from "react"
import { View, SafeAreaView, Text, Dimensions } from "react-native"

import Back from '../components/Back'
import ButtonMain from '../components/ButtonMain'
import RadioGroup from 'react-native-radio-buttons-group';
import Card from '../assets/images/card.svg'
import Cash from '../assets/images/cash.svg'

const Order = ({navigation}) => {
	const [radioPay, setRadioPay] = useState([
        {
            id: '1',
            value: 'Card',
			color: "#F2C94C",
			selected: true,
			size: 15,
			containerStyle: {
				marginVertical: 30
			}
        },
        {
            id: '2',
            value: 'Cash',
			color: "#F2C94C",
			size: 15,
			containerStyle: {
				marginVertical: 30
			}
        }
    ]);

	const [radioDelivery, setRadioDelivery] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            value: 'Card',
			color: "#F2C94C",
			selected: true,
			size: 15,
			containerStyle: {
				marginVertical: 20
			}
        },
        {
            id: '2',
            value: 'Cash',
			color: "#F2C94C",
			size: 15,
			containerStyle: {
				marginVertical: 20
			}
        }
    ]);

	const onPressRadioPay = (radioButtonsArray) => {
        setRadioPay(radioButtonsArray);
    }
	const onPressRadioDelivery = (radioButtonsArray) => {
        setRadioDelivery(radioButtonsArray);
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
					<View style={{
						flex:1,
						flexDirection: 'row',
						justifyContent: 'flex-start',
						alignItems: 'flex-start'
					}}>
						<RadioGroup 
							radioButtons={radioPay} 
							onPress={onPressRadioPay}
							
							containerStyle={{
								width: 50,
								marginLeft: 10,
							}}
						/>
						<View style={{
							flex: 1,
							flexDirection: 'column',
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
							marginRight: 30
						}}>
							<View style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								marginVertical: 17,
								
							}}>
									<Card />
									<Text style={{
										fontFamily: radioPay[0].selected ? "Poppins-Bold" : "Poppins",
										fontSize: 17,
										marginLeft: 10
									}}>Карта</Text>
							</View>
							<View style={{
								width: 250,
								height: 1,
								backgroundColor: "#F2C94C"
							}} />								
							<View style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								marginVertical: 17,
								
							}}>
									<Cash />
									<Text style={{
										fontFamily: radioPay[1].selected ? "Poppins-Bold" : "Poppins",
										fontSize: 17,
										marginLeft: 10
									}}>Готівка</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style={{
				marginTop: 44,
				marginHorizontal: 23
			}}
			>
				<Text style={{
					fontFamily: 'Poppins-Bold',
					fontSize: 17,
					color: 'white'
				}}>
					Метод доставки
				</Text>
				<View style={{
					marginTop: 15,
					height: 112,
					backgroundColor: "white",
					borderRadius: 20
				}}
				>
					<View style={{
						flex:1,
						flexDirection: 'row',
						justifyContent: 'flex-start',
						alignItems: 'flex-start'
					}}>
						<RadioGroup 
							radioButtons={radioDelivery} 
							onPress={onPressRadioDelivery}
							
							containerStyle={{
								width: 50,
								marginLeft: 10,
							}}
						/>
						<View style={{
							flex: 1,
							flexDirection: 'column',
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
							marginRight: 30
						}}>
							<View style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								marginVertical: 17,
								
							}}>
									<Text style={{
										fontFamily: radioDelivery[0].selected ? "Poppins-Bold" : "Poppins",
										fontSize: 17,
										marginLeft: 10
									}}>Додомцю</Text>
							</View>
							<View style={{
								width: 250,
								height: 1,
								backgroundColor: "#F2C94C"
							}} />								
							<View style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								marginVertical: 17,
								
							}}>
									<Text style={{
										fontFamily: radioDelivery[1].selected ? "Poppins-Bold" : "Poppins",
										fontSize: 17,
										marginLeft: 10
									}}>З собою</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style={{
				flex: 1,
				justifyContent: 'space-between',
				alignSelf: 'center',
				marginHorizontal: 24,
				top: 140
				}}>
				<ButtonMain 
					text={'Замовити'}
					buttonPress={() => navigation.navigate('Дякую')}
					width={Dimensions.get('window').width - 48}
					height={70}
					paddingH={22} 
					paddingV={23} 
					marginB={50}
				/>
			</View>
		</SafeAreaView>
	)
} 
export default Order
