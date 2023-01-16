import NavigatorTabs from './NavigatorTabs'

const stylesRegister = {
	text: {
	  fontFamily: 'Poppins-Bold',
	  fontSize: 18,
	  marginBottom: 4,
	  marginTop: 25,
	},
	textFocus: '#FFD748',
	textUnfocus: '#C3C3C5',
	view: {
	  width: 80,
	  alignItems: 'center',
	  justifyContent: 'center',
	  borderColor: '#FFD748',
	},
	borderFocus: 3,
	borderUnfocus: 0
  }

const DishesNavigator = ({state, descriptors, navigation, position}) => {
	return(
		<NavigatorTabs 
          state={state} 
          descriptors={descriptors} 
          navigation={navigation} 
          position={position}
		  tabStyles={stylesRegister}
        />
	)
}

export default DishesNavigator
