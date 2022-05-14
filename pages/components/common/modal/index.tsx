import React, {memo} from 'react';
import {View, Text, Modal, TouchableHighlight} from 'react-native';

import styles from './style';

interface propsType {
  visible: boolean;
  text: string;
  setVisible: (a: boolean) => void;
}

export default memo(function Index(props: propsType) {
  const {visible, setVisible, text} = props;

  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
      onRequestClose={() => {
        setVisible(!visible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{text}</Text>
          <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              setVisible(!visible);
            }}>
            <Text style={styles.textStyle}>关闭</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
});
