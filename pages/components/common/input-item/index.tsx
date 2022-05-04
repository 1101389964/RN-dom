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
  loginUrl: ImageSourcePropType;
  changeText: (text: string) => void;
  textAlign?: 'left' | 'center' | 'right';
  defaultValue?: string;
  contorlMessage?: {
    title: string;
    color?: string;
    onPress?: (text?: any) => void;
  };
  style?: StyleProp<ViewStyle>;
}

function Index(props: propsType) {
  const {
    changeText,
    value,
    defaultValue = '',
    textAlign = 'left',
    loginUrl,
    contorlMessage = {title: '', color: '#749bd3', onPress: () => {}},
  } = props;

  const hasControl = props.hasOwnProperty('hasControl') ? false : true;

  return (
    <View style={styles.searchWrap}>
      <Image style={styles.searchLogin} source={loginUrl} />
      <TextInput
        textAlign={textAlign}
        placeholder={defaultValue}
        style={styles.search}
        onChangeText={text => {
          changeText(text);
        }}
        value={value}
      />
      {hasControl ? (
        <Button
          title={contorlMessage.title}
          onPress={contorlMessage.onPress}
          color="#749bd3"
        />
      ) : (
        <></>
      )}
    </View>
  );
}

export default memo(Index);
