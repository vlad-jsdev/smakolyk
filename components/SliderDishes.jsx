import { FlatList } from 'react-native'
import ItemDish from "./ItemDish"

const SliderDishes = ({dishes}) => {
	return (
		<FlatList
			data={dishes}
			renderItem={({item}) => <ItemDish title={item.title} />}
			keyExtractor={item => item.id}
		/>
	)
}

export default SliderDishes;
