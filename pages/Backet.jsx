import {useEffect, useState} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Back from '../components/Back';
import ItemLikes from '../components/ItemLikes';
import {dishesData} from '../mock/data';
import ButtonMain from '../components/ButtonMain';
import Swipe from '../assets/images/swipe.svg';

const Backet = ({navigation, route}) => {
  const [isFav, setFav] = useState([]);

  useEffect(() => {
    setFav(() => dishesData.filter(item => item.favorite === true));
  }, []);

  const delItem = id => {
    setFav(() => isFav.filter(item => item.id !== id));
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#3F3F3E'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 24,
          marginVertical: 32,
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Back navigation={navigation} />
        </View>
        <View>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Poppins-Bold',
              fontSize: 24,
              color: 'white',
            }}>
            Кошик
          </Text>
        </View>
        <View style={{width: 30}}></View>
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginBottom: 25,
        }}>
        <Swipe />
      </View>
      <FlatList
        data={isFav}
        renderItem={({item}) => (
          <ItemLikes
            delEl={() => delItem(item.id)}
            title={item.title}
            img={item.img}
            price={item.price}
          />
        )}
        keyExtractor={item => item.id}
      />
      <View
        style={{
          alignSelf: 'center',
          marginBottom: 20,
        }}>
        <ButtonMain
          text={'Замовити'}
          buttonPress={() => navigation.navigate('Замовлення')}
          height={50}
          width={224}
          paddingV={null}
          paddingH={0}
          marginB={20}
        />
      </View>
    </SafeAreaView>
  );
};
export default Backet;
