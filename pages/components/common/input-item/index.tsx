import React, {memo} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleProp,
  Button,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import styles from './style';

interface propsType {
  value: string;
  loginUrl?: ImageSourcePropType | boolean;
  changeText: (text: string) => void;
  textAlign?: 'left' | 'center' | 'right';
  defaultValue?: string;
  contorlMessage?: {
    title: string;
    color?: string;
    onPress?: (text?: any) => void;
  };
  secure?: boolean;
  style?: StyleProp<ViewStyle>;
}

function Index(props: propsType) {
  const {
    changeText,
    value,
    loginUrl = false,
    defaultValue = '',
    textAlign = 'left',
    secure = false,
    contorlMessage = {title: '', color: '#749bd3', onPress: () => {}},
  } = props;

  const hasControl = props.hasOwnProperty('contorlMessage');

  return (
    <View style={styles.searchWrap}>
      {loginUrl ? (
        <Image
          style={styles.searchLogin}
          source={loginUrl as ImageSourcePropType}
        />
      ) : (
        loginUrl
      )}
      <TextInput
        textAlign={textAlign}
        placeholder={defaultValue}
        style={styles.search}
        onChangeText={text => {
          changeText(text);
        }}
        secureTextEntry={secure}
        value={value}
        keyboardType={'numeric'}
      />
      {hasControl ? (
        <Button
          title={contorlMessage.title}
          onPress={contorlMessage.onPress}
          color="rgb(79,149,249)"
        />
      ) : null}
    </View>
  );
}

export default memo(Index);
