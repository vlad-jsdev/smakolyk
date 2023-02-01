import React from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ButtonMain from '../components/ButtonMain';
import InputLogin from '../components/InputLogin';

const Register = () => {
  const [currentValue, setCurrentValue] = useState('');
  const onInputText = ({text}) => {
    setCurrentValue(text);
  };
  const registerPress = () => {
    console.log('register');
  };
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <View>
        <InputLogin
          marTop={32}
          text={currentValue}
          placeholderText="example@gmail.com"
          setText={onInputText}
          title="Почта"
          secure={false}
          type="mail"
        />
        <InputLogin
          marTop={40}
          text={currentValue}
          placeholderText="Password"
          setText={onInputText}
          title="Пароль"
          secure={true}
          type="password"
        />
        <InputLogin
          marTop={40}
          text={currentValue}
          placeholderText="Password"
          setText={onInputText}
          title="Повторите пароль"
          secure={true}
          type="password"
        />
      </View>
      <ButtonMain
        text="Зареєструватися"
        buttonPress={registerPress}
        paddingH={22}
        paddingV={23}
        marginB={50}
      />
    </SafeAreaView>
  );
};

export default Register;
