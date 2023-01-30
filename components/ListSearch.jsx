import { useState } from "react"
import { View, Text, Dimensions } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import ItemSearch from "./ItemSearch"

const ListSearch = ({findDishes}) => {
	return(
		<View style={{
			flex: 1,
			backgroundColor: '#1E1E1E',
			borderRadius: 26
		}}>
			<Text style={{
				alignSelf: 'center',
				marginVertical: 27,
				color: 'white',
				fontFamily: 'Poppins-Bold',
				fontSize: 24,
			}}>{findDishes.length} страв</Text>
				<FlatList 
					data={findDishes}
					renderItem={({item, index}) => {
						const midItem = index % 2;
						return (
							<View style={{marginTop: midItem ? 50 : 0}}>
								<ItemSearch title={item.title} img={item.img} price={item.price} infoDish={item.infoDish}/>
							</View>
						)
						
					}}
					keyExtractor={item => item.id}
					horizontal={false}
					numColumns={2}
					contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
				/>
		</View>
	)
}

export default ListSearch
