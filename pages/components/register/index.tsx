import React, {memo, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {useDispatch} from 'react-redux';

import InputItem from '../common/input-item/index';

import {register} from '../../store/action';

import styles from './style';

const App: React.FC = () => {
  //定义的状态及变量
  const [account, setAccount] = useState('');
  const [vrify, setVrify] = useState('');
  const [password, setPassword] = useState('');
  const [modalVerify, setModalVerify] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [result, setResult] = useState(false);
  const [verify, setverify] = useState('121456');
  // dispath
  const dispatch = useDispatch(); //从Hook里面获取dispatch,useDispatch来自于react-redux

  //自定义方法
  function onChangeAccount(value: string) {
    setAccount(value);
    console.log(value);
  }

  function onChangeVerify(value: string) {
    setVrify(value);
    console.log(value);
  }

  function onChangePassword(value: string) {
    setPassword(value);
    console.log(value);
  }

  function getVerify() {
    const getRandom = () => Math.round(Math.random() * 10);
    let num = '';
    for (let i = 0; i < 6; i++) {
      num += getRandom();
    }
    setverify(num);
    setModalVerify(true);
  }

  function testVerify() {
    const res = verify === vrify ? true : false;
    setResult(res);
    setModalLogin(true);
    if (res) {
      dispatch(register({account, password}));
    }
  }

  return (
    <>
      <View style={styles.bottom}>
        <InputItem
          value={account}
          defaultValue="请输入账号"
          changeText={text => onChangeAccount(text)}
          loginUrl={require('../../img/icon/account.png')}
        />
        <InputItem
          value={vrify}
          defaultValue="请输入验证码"
          changeText={text => onChangeVerify(text)}
          loginUrl={require('../../img/icon/verify.png')}
          contorlMessage={{
            title: '获取验证码',
            onPress: getVerify,
          }}
        />
        <InputItem
          value={password}
          defaultValue="请输入密码"
          changeText={text => onChangePassword(text)}
          loginUrl={require('../../img/icon/password.png')}
        />

        <TouchableOpacity
          onPress={testVerify}
          activeOpacity={0.7}
          style={styles.btn}>
          <Text style={styles.btnText}>注册</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVerify}
        onRequestClose={() => {
          setModalVerify(!modalVerify);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{verify}</Text>

            <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                setModalVerify(!modalVerify);
              }}>
              <Text style={styles.textStyle}>关闭验证码</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
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
              {result ? '注册成功' : '验证码错误'}
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
