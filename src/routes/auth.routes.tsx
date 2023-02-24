import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { NewTask } from '../screens/NewTask';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="login"
        component={Login}
      />
      <Screen 
        name="home"
        component={Home}
      />
      <Screen 
        name="newTask"
        component={NewTask}
      />
    </Navigator>
  )
}