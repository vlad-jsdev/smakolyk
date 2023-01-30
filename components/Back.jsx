import { View, Pressable } from "react-native"
import BackSvg from "../assets/images/search/back.svg"

const Back = ({navigation}) => {
	return (
		<Pressable style={{
			height: 44,
			width: 44,
			backgroundColor: "#FFD748",
			borderRadius: 100,
			justifyContent: "center",
			alignItems: 'center'
		}}
		onPress={() => navigation.goBack()}
		>
			<BackSvg style={{right: 2}} height={16}/>
		</Pressable>
	)
}
export default Back
