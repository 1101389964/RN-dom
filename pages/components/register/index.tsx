import React, {memo, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import InputItem from '../common/input-item/index';
import Modal from '../common/modal/index';
import {register} from '../../store/action';

import styles from './style';

const App: React.FC = () => {
  //定义的状态及变量
  const [account, setAccount] = useState('');
  const [vrify, setVrify] = useState('');
  const [password, setPassword] = useState('');
  const [modalVerify, setModalVerify] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [result, setResult] = useState('');
  const [verify, setverify] = useState('121456');
  // dispath
  const dispatch = useDispatch(); //从Hook里面获取dispatch,useDispatch来自于react-redux

  function getVerify() {
    const getRandom = () => Math.floor(Math.random() * 10);
    let num = '';
    for (let i = 0; i < 6; i++) {
      num += getRandom();
    }
    setverify(num);
    setModalVerify(true);
  }

  function testVerify() {
    const res = verify === vrify ? true : false;
    res ? setResult('注册成功') : setResult('验证码错误');
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
          changeText={setAccount}
          loginUrl={require('../../img/icon/account.png')}
        />
        <InputItem
          value={vrify}
          defaultValue="请输入验证码"
          changeText={setVrify}
          loginUrl={require('../../img/icon/verify.png')}
          contorlMessage={{
            title: '获取验证码',
            onPress: getVerify,
          }}
        />
        <InputItem
          value={password}
          defaultValue="请输入密码"
          secure={true}
          changeText={setPassword}
          loginUrl={require('../../img/icon/password.png')}
        />

        <TouchableOpacity
          onPress={testVerify}
          activeOpacity={0.7}
          style={styles.btn}>
          <Text style={styles.btnText}>注册</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalVerify} text={verify} setVisible={setModalVerify} />
      <Modal visible={modalLogin} text={result} setVisible={setModalLogin} />
    </>
  );
};

export default memo(App);
