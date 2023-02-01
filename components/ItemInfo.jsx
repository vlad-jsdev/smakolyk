import {View, Text, Image} from 'react-native';
import ButtonMain from './ButtonMain';

const ItemInfo = ({info}) => {
  const {img, title, price, infoDish} = info;
  console.log('Info: ', info);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 26,
        justifyContent: 'space-between',
      }}>
      <View>
        <Image
          source={img}
          style={{
            alignSelf: 'center',
            marginTop: 15,
            width: 180,
            height: 180,
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            marginVertical: 27,
            fontFamily: 'Poppins-Bold',
            fontSize: 30,
          }}>
          {title}
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            fontFamily: 'Poppins-Bold',
            fontSize: 24,
          }}>
          {price} грн
        </Text>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontFamily: 'Poppins-Bold',
            fontSize: 17,
            marginTop: 70,
            marginLeft: 25,
            color: '#FFD748',
          }}>
          Інформація про страву
        </Text>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontFamily: 'Poppins',
            fontSize: 15,
            marginTop: 9,
            marginLeft: 25,
            color: '#5A5A5A',
          }}>
          {infoDish}
        </Text>
      </View>
      <View
        style={{
          marginBottom: 50,
        }}>
        <ButtonMain text="Додати в кошик" paddingH={24} colorB="black" />
      </View>
    </View>
  );
};

export default ItemInfo;
