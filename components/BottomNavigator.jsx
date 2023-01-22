import NavigatorTabsBottom from '../components/NavigatorTabsBottom'

const stylesRegister = {
	text: {
	  fontFamily: 'Poppins-Bold',
	  fontSize: 18,
	  marginBottom: 4,
	  marginTop: 25,
	},
	textFocus: '#FFD748',
	textUnfocus: '#C3C3C5',
	fontWeightFocus: '700',
	fontWeightUnfocus: '400',
	view: {
	  width: 80,
	  alignItems: 'center',
	  justifyContent: 'center',
	  borderColor: 'red',
	},
	borderFocus: 3,
	borderUnfocus: 0
  }

const BottomNavigator = ({state, descriptors, navigation, position}) => {
	return(
		<NavigatorTabsBottom 
          state={state} 
          descriptors={descriptors} 
          navigation={navigation} 
          position={position}
        />
	)
}
export default BottomNavigator
