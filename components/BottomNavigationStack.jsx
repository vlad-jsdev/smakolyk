import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Backet from '../pages/Backet';
import Home from '../pages/Home';
import Likes from '../pages/Likes';
import Profile from '../pages/Profile';
import SearchPage from '../pages/SearchPage';
import BottomNavigator from './BottomNavigator';

const TabBottom = createBottomTabNavigator();


const BottomNavigationStack = () => {
	return (
			<TabBottom.Navigator
              tabBar={props => <BottomNavigator {...props} state={{...props.state, routes: props.state.routes.slice(0,4)}} />}
            >
              <TabBottom.Screen name="Home" component={Home} 
                options={{ headerShown: false }}
               />
              <TabBottom.Screen name="Likes" component={Likes} 
                options={{ headerShown: false }}/>
              <TabBottom.Screen name="Profile" component={Profile} 
                options={{ headerShown: false }}/>
              <TabBottom.Screen name="Basket" component={Backet} 
                options={{ headerShown: false }}/>
            </TabBottom.Navigator>
	)
}

export default BottomNavigationStack
