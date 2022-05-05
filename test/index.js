import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import Details from './Details';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* initialRouteName 为默认的路由name, screenOptions为配置去全局标题栏样式 */}
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            /* headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }, */
          }}
        />
        {/* initialParams为组件接受到的默认参数 */}
        <Stack.Screen
          name="Details"
          component={Details}
          initialParams={{itemId: 42}}
          options={{title: 'details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
