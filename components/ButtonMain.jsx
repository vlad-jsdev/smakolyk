import React from 'react';
import {Pressable, Text} from 'react-native';

const ButtonMain = ({
  text,
  buttonPress,
  height,
  width,
  paddingV,
  paddingH,
  marginB,
  colorB,
}) => {
  return (
    <Pressable
      style={{
        height: height || 70,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: paddingV || null,
        marginHorizontal: paddingH || null,
        borderRadius: 30,
        backgroundColor: '#F2C94C',
        marginBottom: marginB || null,
        width: width || 'auto',
      }}
      onPress={buttonPress}>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: colorB ? colorB : 'white',
        }}>
        {text}
      </Text>
    </Pressable>
  );
};

export default ButtonMain;
