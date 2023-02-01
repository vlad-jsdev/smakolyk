import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {dishesData} from '../mock/data';
import SliderDishes from '../components/SliderDishes';
import ButtonMain from '../components/ButtonMain';

const Dishes = ({tabTitle}) => {
  const [isDishes, setDishes] = useState([]);
  const press = () => {
    console.log('More');
  };
  useEffect(() => {
    setDishes(
      dishesData.filter(item => {
        if (item.type === tabTitle) {
          return item;
        }
      }),
    );
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#3F3F3E'}}>
      <SliderDishes dishes={isDishes} />
      <View style={{alignItems: 'center'}}>
        <ButtonMain
          text={'Більше'}
          buttonPress={press}
          height={50}
          width={224}
          paddingV={null}
          paddingH={0}
          marginB={20}
        />
      </View>
    </View>
  );
};

export default Dishes;
