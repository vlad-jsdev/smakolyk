import { View, Text, TouchableOpacity } from 'react-native';

import HomeSvg from "../assets/images/menu/home.svg"
import ProfileSvg from "../assets/images/menu/profile.svg"
import LikesSvg from "../assets/images/menu/likes.svg"
import BasketSvg from "../assets/images/menu/basket.svg"

const NavigatorTabsBottom = ({state, descriptors, navigation}) => {
	// console.log('Descriptions: ', descriptors)
	// const focusedOptions = descriptors[state.routes[state.index].key];
	// if (focusedOptions?.tabBarStyle?.display === "none") {
	// 	return null;
	// }
	return (
	<View style={{ flexDirection: 'row', height: 80}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
		let iconColor = isFocused ? '#FFD748' : 'white'
		let iconShadow = {
			shadowColor: "#FFD748",
			shadowOpacity: 2.47,
			shadowRadius: 15.65,
			elevation: 10
		}
		let icon = ''
		switch (label) {
			case 'Home':
				icon = <HomeSvg height={28} stroke={iconColor} style={isFocused && iconShadow}/>
				break;
			case 'Likes':
				icon = <LikesSvg height={28} stroke={iconColor} fill={iconColor} style={isFocused && iconShadow}/>
				break;
			case 'Profile':
				icon = <ProfileSvg height={28} stroke={iconColor} style={isFocused && iconShadow}/>
				break;
			case 'Basket':
				icon = <BasketSvg height={28} fill={iconColor} style={isFocused && iconShadow}/>
				break;
			default:
				break;
		}
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
			key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, backgroundColor: '#3F3F3E', alignItems: 'center' }}
          >
			<View style={{top: 20}}>
				{icon}
			</View>
          </TouchableOpacity>
        );
      })}
    </View>
	)
}

export default NavigatorTabsBottom
