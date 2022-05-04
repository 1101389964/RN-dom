import React, {memo, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from 'react-native';

import InputItem from '../common/input-item';

import styles from './style';

const App: React.FC = () => {
  //定义的状态及变量
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [modalLogin, setModalLogin] = useState(false);
  const [result, setResult] = useState(false);

  //hooks
  function onChangeAccount(value: string) {
    setAccount(value);
    console.log(value);
  }

  function onChangePassword(value: string) {
    setPassword(value);
    console.log(value);
  }

  function testVerify() {
    setResult(false);
    setModalLogin(true);
  }
  return (
    <>
      <View style={styles.bottom}>
        <InputItem
          value={account}
          loginUrl={require('../../img/icon/account.png')}
          changeText={onChangeAccount}
          defaultValue="请输入账号"
        />
        <InputItem
          value={password}
          loginUrl={require('../../img/icon/password.png')}
          changeText={onChangePassword}
          defaultValue="请输入密码"
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
