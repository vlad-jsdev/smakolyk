import { useEffect, useState } from "react"
import { View } from "react-native"
import {dishesData} from "../mock/data"
import SliderDishes from '../components/SliderDishes'
import ButtonMain from "../components/ButtonMain"


const Dishes = ({tabTitle}) => {
	const [isDishes, setDishes] = useState([])
	const press = () => {
		console.log('More')
	  }
	useEffect(() => {
		setDishes(dishesData.filter((item) => {
			if(item.type === tabTitle){
				return item
			}
		}))
	}, [])
	return (
		<View style={{ flex: 1, backgroundColor: '#3F3F3E'}}>
			<SliderDishes dishes = {isDishes} />
			<ButtonMain text={'Більше'} buttonPress={press}/>
		</View>
	)
}

export default Dishes
