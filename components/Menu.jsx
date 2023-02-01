import {View} from 'react-native';

const Menu = () => {
  return (
    <View
      style={{
        height: 44,
        width: 44,
        backgroundColor: '#FFD748',
        borderRadius: 100,
      }}>
      <View
        style={{
          position: 'absolute',
          top: 15,
          left: 12,
          width: 10,
          height: 2,
          backgroundColor: 'black',
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 21.4,
          left: 12,
          width: 20,
          height: 2,
          backgroundColor: 'black',
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 28,
          left: 12,
          width: 14,
          height: 2,
          backgroundColor: 'black',
        }}
      />
    </View>
  );
};

export default Menu;
