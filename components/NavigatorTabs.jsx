import { 
	Animated,
	View,
	TouchableOpacity
} from "react-native";

const NavigatorTabs = ({state, descriptors, navigation, position, tabStyles}) => {
	return(
		<View style={{flexDirection: 'row'}}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate({name: route.name, merge: true});
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
            const inputRange = state.routes.map((_, i) => i);

            return (
              <TouchableOpacity
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{flex: 1, alignItems: 'center'}}>
                <Animated.View
                  style={[
                    tabStyles.view,
                    {borderBottomWidth: isFocused ? tabStyles.borderFocus : tabStyles.borderUnfocus},
                  ]
                  }>
                  <Animated.Text
                    style={[
                      tabStyles.text,
                      {color: isFocused ? tabStyles.textFocus : tabStyles.textUnfocus},
                      {fontWeight: isFocused ? tabStyles.fontWeightFocus : tabStyles.fontWeightUnfocus}
                    ]
                    }>
                    {label}
                  </Animated.Text>
                </Animated.View>
              </TouchableOpacity>
            );
          })}
        </View>
	)
}

export default NavigatorTabs
