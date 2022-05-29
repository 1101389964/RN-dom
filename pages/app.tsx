import React, {memo, useState} from 'react';
import {View, SafeAreaView, Text, ImageBackground} from 'react-native';

// import {Provider} from 'react-redux';
// import store from './store/index';

import Register from './components/register';
import Login from './components/login';
import styles from './style';

export default memo(props => {
  //定义的状态及变量
  const [flag, setFlag] = useState(true);
  //hooks

  //登陆
  function login() {
    setFlag(false);
  }

  //注册
  function register() {
    setFlag(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.img}>
          <ImageBackground
            source={require('./img/background.webp')}
            style={styles.img}>
            <View style={styles.btnFather}>
              <Text style={styles.LoginOrRegister} onPress={login}>
                登录
              </Text>
              <Text style={styles.LoginOrRegister} onPress={register}>
                注册
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      {flag ? <Register /> : <Login {...props} />}
    </SafeAreaView>
  );
});
