import { View, SafeAreaView, Text, Image } from "react-native"
import { color } from "react-native-reanimated"
import Back from '../components/Back'
import {user} from '../mock/data'

const Profile = ({navigation}) => {
	return (<SafeAreaView style={{ flex: 1, backgroundColor: "#3F3F3E" }}>
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
					Мій профіль
				</Text>
				</View>
				<View style={{width: 30}}>
				</View>
			</View>
			<View style={{
				flex: 1,
				flexDirection: 'column'
			}}>
			<View style={{
					width: 183,
					height: 197,
					backgroundColor: 'white',
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'center',
					borderRadius: 20
					}}>
				<Image  
					source={user.img}
					style={{
						height: 174,
						width: 136,
						borderRadius: 20
					}}
				/>
			</View>
			<Text
				style={{
					fontFamily: 'Poppins',
					fontSize: 15,
					paddingTop: 10,
					alignSelf: 'center',
					color: '#FFD748'
				}}
			>змінити</Text>
			<View style={{
				marginTop: 20,
				marginHorizontal: 23
			}}
			>
				<Text style={{
					fontFamily: 'Poppins-Bold',
					fontSize: 18,
					color: 'white'
				}}>
					Ім'я
				</Text>
				<Text style={{
					fontFamily: 'Poppins',
					fontSize: 17,
					color: 'white'
				}}
				>
					{user.name}
				</Text>
				<View style={{
					marginTop: 6,
					height: 1,
					backgroundColor: "white"
				}}
				></View>
			</View>
			<View style={{
				marginTop: 25,
				marginHorizontal: 23
			}}
			>
				<Text style={{
					fontFamily: 'Poppins-Bold',
					fontSize: 18,
					color: 'white'
				}}>
					Прізвище
				</Text>
				<Text style={{
					fontFamily: 'Poppins',
					fontSize: 17,
					color: 'white'
				}}
				>
					{user.lastName}
				</Text>
				<View style={{
					marginTop: 6,
					height: 1,
					backgroundColor: "white"
				}}
				></View>
			</View>
			<View style={{
				marginTop: 25,
				marginHorizontal: 23
			}}
			>
				<Text style={{
					fontFamily: 'Poppins-Bold',
					fontSize: 18,
					color: 'white'
				}}>
					Адреса
				</Text>
				<Text style={{
					fontFamily: 'Poppins',
					fontSize: 17,
					color: 'white'
				}}
				>
					{user.address}
				</Text>
				<View style={{
					marginTop: 6,
					height: 1,
					backgroundColor: "white"
				}}
				></View>
			</View>
			</View>
			</SafeAreaView>)
} 
export default Profile
