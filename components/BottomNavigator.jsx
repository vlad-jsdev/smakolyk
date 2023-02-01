import NavigatorTabsBottom from '../components/NavigatorTabsBottom';

const BottomNavigator = ({state, descriptors, navigation, position}) => {
  return (
    <NavigatorTabsBottom
      state={state}
      descriptors={descriptors}
      navigation={navigation}
      position={position}
    />
  );
};
export default BottomNavigator;
