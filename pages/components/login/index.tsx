import React, {memo, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from 'react-native';

import InputItem from '../common/input-item';
import {useSelector, shallowEqual} from 'react-redux';
import styles from './style';
import {datasType, userType} from '../../store/interfsce';

const App = (props: {navigation?: any}) => {
  const {navigation} = props;

  //redux
  const users = useSelector<datasType, userType>(
    //下面函数的返回值会作为useSelector的返回值
    state => state.users,
    shallowEqual, //传入shallowEqual useSelector
  );

  //定义的状态及变量
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [modalLogin, setModalLogin] = useState(false);
  const [result, setResult] = useState(false);

  function testVerify() {
    const {account: act, password: pwd} = users;
    if (account === act && password === pwd) {
      setResult(true);
      navigation.navigate('Home');
    } else {
      setResult(false);
      setModalLogin(true);
    }
  }
  return (
    <>
      <View style={styles.bottom}>
        <InputItem
          value={account}
          loginUrl={require('../../img/icon/account.png')}
          changeText={setAccount}
          defaultValue="请输入账号"
        />
        <InputItem
          value={password}
          loginUrl={require('../../img/icon/password.png')}
          changeText={setPassword}
          defaultValue="请输入密码"
          secure={true}
        />

        <TouchableOpacity
          onPress={testVerify}
          activeOpacity={0.7}
          style={styles.btn}>
          <Text style={styles.btnText}>登录</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalLogin}
        onRequestClose={() => {
          setModalLogin(!modalLogin);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {result ? '登录成功' : '账号或密码错误'}
            </Text>

            <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                setModalLogin(!modalLogin);
              }}>
              <Text style={styles.textStyle}>关闭</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default memo(App);
