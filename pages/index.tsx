import React, {memo, useState, useEffect} from 'react';
import {View, SafeAreaView, Text, ImageBackground} from 'react-native';

import request from '../request';

import Register from './components/register';
import Login from './components/login';
import styles from './style';

const App: React.FC = () => {
  //定义的状态及变量
  const [banners, setBanners] = useState([]);
  const [flag, setFlag] = useState(true);
  //hooks
  useEffect(() => {
    request.get('/banner?type=2').then((res: any) => {
      setBanners(res.banners);
    });
    console.log(banners);
  }, [banners]);

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
            source={require('./img/src=http___img1.niutuku.com_hd_1308_59_59-niutuku.com-242526.jpg&refer=http___img1.niutuku.webp')}
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
      {flag ? <Register /> : <Login />}
    </SafeAreaView>
  );
};

export default memo(App);
