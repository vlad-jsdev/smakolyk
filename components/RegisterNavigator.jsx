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
import NavigatorTabs from './NavigatorTabs';

const stylesRegister = {
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    marginBottom: 4,
  },
  textFocus: 'black',
  textUnfocus: '#7D7D7D',
  view: {
    width: 134,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderFocus: 3,
  borderUnfocus: 0,
};

function RegisterNavigator({state, descriptors, navigation, position}) {
  return (
    <>
      <View style={styles.topBanner}>
        <View style={{marginTop: 85}}></View>
        <View style={styles.logo}>
          <Text style={styles.bannerText}>Smakolyk</Text>
          <Logo height={115} />
        </View>
        <NavigatorTabs
          state={state}
          descriptors={descriptors}
          navigation={navigation}
          position={position}
          tabStyles={stylesRegister}
        />
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
