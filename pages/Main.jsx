import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BottomNavigator from '../components/BottomNavigator';
import Backet from './Backet';
import Home from './Home';
import Likes from './Likes';
import Profile from './Profile';

const Tab = createMaterialBottomTabNavigator();

const Main = () => {
	return (
		<Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Likes" component={Likes} />
			<Tab.Screen name="Profile" component={Profile} />
			<Tab.Screen name="Backet" component={Backet} />
    	</Tab.Navigator>
	)
}

export default Main
