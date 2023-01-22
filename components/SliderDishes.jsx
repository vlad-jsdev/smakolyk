import { FlatList, View, Dimensions } from 'react-native'
import ItemDish from "./ItemDish"


const SliderDishes = ({dishes}) => {
	return (
			<FlatList
				style={{backgroundColor: '#3F3F3E'}}
				data={dishes}
				horizontal={true}
				renderItem={({item}) => <ItemDish title={item.title} img={item.img} price={item.price} />}
				keyExtractor={item => item.id}
			/>
	)
}

export default SliderDishes;
