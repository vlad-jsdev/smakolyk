import { View, Text } from "react-native"
import Pressable from "react-native/Libraries/Components/Pressable/Pressable"
import SearchIcon from "../assets/images/search.svg"

const Search = () => {
	return (
		<View style={{
			height: 60,
			borderWidth: 1,
			borderColor: "#FFD748",
			backgroundColor: "#FFFFFF",
			borderRadius: 30,
			marginHorizontal: 23
		}}>
			<View style={{
				marginLeft: 35
			}}>
				<Pressable >
					<SearchIcon height={60}/>
					<Text style={{
						position: 'absolute',
						top: 20,
						left: 40,
						fontFamily: "Poppins-Regular",
						fontSize: 17,
						color: "#999999"
					}}>Пошук</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default Search
