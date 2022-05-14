import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import store from './store/index';

import App from './app';
import Home from './components/database';

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* initialRouteName 为默认的路由name, screenOptions为配置去全局标题栏样式 */}
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#2196F3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Login"
            component={App}
            options={{
              title: '登录',
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: '数据库'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
