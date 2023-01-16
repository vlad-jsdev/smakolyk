import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import {dishesData} from "../mock/data"
import SliderDishes from '../components/SliderDishes'


const Dishes = ({tabTitle}) => {
	const [isDishes, setDishes] = useState([])

	useEffect(() => {
		setDishes(dishesData.filter((item) => {
			if(item.type === tabTitle){
				return item
			}
		}))
	}, [])
	return (
		<View>
			<SliderDishes dishes = {isDishes} />
		</View>
	)
}

export default Dishes
