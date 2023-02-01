import {useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import SearchIcon from '../assets/images/search.svg';
import {useNavigation} from '@react-navigation/native';
import {dishesData} from '../mock/data';

const Search = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const navigation = useNavigation();

  const pressSearch = () => {
    const results = dishesData.filter(item => {
      if (item.title.toLowerCase().includes(textInputValue.toLowerCase())) {
        return item;
      }
    });
    navigation.navigate('Пошук', {
      searchText: textInputValue,
      findDishes: results,
    });
  };

  return (
    <View
      style={{
        height: 60,
        borderWidth: 1,
        borderColor: '#FFD748',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        marginHorizontal: 23,
      }}>
      <View
        style={{
          marginLeft: 35,
          flexDirection: 'row',
        }}>
        <SearchIcon height={60} onPress={() => pressSearch()} />
        <TextInput
          autoCapitalize={'none'}
          style={{
            marginLeft: 10,
            marginTop: 10,
            alignItems: 'center',
            fontFamily: 'Poppins-Regular',
            fontSize: 17,
            height: 40,
          }}
          onChangeText={text => setTextInputValue(text)}
          value={textInputValue}
          placeholder="Пошук"
          textContentType="text"
        />
      </View>
    </View>
  );
};

export default Search;
