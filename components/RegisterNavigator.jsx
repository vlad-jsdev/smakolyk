import React from 'react';
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import {color} from 'react-native-reanimated';

import Logo from '../assets/images/logo.svg';

function RegisterNavigator({state, descriptors, navigation, position}) {
  return (
    <>
      <View style={styles.topBanner}>
        <View style={{marginTop: 85}}></View>
        <View style={styles.logo}>
          <Text style={styles.bannerText}>Smakolyk</Text>
          <Logo height={115} />
        </View>
        <View style={{flexDirection: 'row'}}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            console.log('RouteKey:', route.key)
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

			// Make animation
            const inputRange = state.routes.map((_, i) => i);
            const opacity = position.interpolate({
              inputRange,
              outputRange: inputRange.map(i => (i === index ? 1 : 0)),
            });

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
                  style={{
                    width: 134,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: isFocused ? 3 : 0,
                  }}>
                  <Animated.Text
                    style={{
                      fontFamily: 'Poppins-Bold',
                      fontSize: 18,
                      marginBottom: 4,
                      color: isFocused ? 'black' : '#7D7D7D',
                    }}>
                    {label}
                  </Animated.Text>
                </Animated.View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topBanner: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 300,
    borderRadius: 15,
    backgroundColor: '#FFD748',
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  bannerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 45,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RegisterNavigator;
