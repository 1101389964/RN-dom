// 使用 EStyleSheet 可以使使用变量
import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native';
EStyleSheet.build({
  $default_color: '#fff',
  $active_color: '#3f90f7',
  $active_backgroundColor: '#e9f6fe',
  $fontColor: '#111',
  $disable: '#ddd',
});

const Styles = EStyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '$default_color',
  },
  scrollContainer: {
    flexGrow: 0,
    borderColor: '#eee',
  },
  scrollContainerBorderRight: {
    borderRightWidth: 1,
  },
  scrollContainerBorderBottom: {
    borderBottomWidth: 1,
  },
  scrollItemContainer: {},
  bottomContent: {
    flex: 3,
    justifyContent: 'center',
    alignContent: 'center',
  },
  iconWrap: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    paddingHorizontal: 12,
    paddingBottom: 5,
    justifyContent: 'center',
    backgroundColor: '$active_backgroundColor',
  },
  icon: {
    width: 12,
    height: 12,
    borderWidth: 1.5,
    // transform 写方式有些不同
    transform: [{rotate: '45deg'}],
    borderColor: '#111',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  dropModal: {
    position: 'absolute',
    width: '100%',
    top: 40,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$active_backgroundColor',
  },
  modalItem: {
    width: 80,
    height: 50,
    backgroundColor: 'red',
  },
});

const ItemStyles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    height: 40,
    width: 80,
    borderColor: '$default_color',
  },
  containerBorderBottom: {
    borderBottomWidth: 2,
  },
  containerBorderRight: {
    borderRightWidth: 2,
  },
  activeViewStyle: {
    borderColor: '$active_color',
    backgroundColor: '$active_backgroundColor',
  },
  activeTextStyle: {
    color: '$active_color',
  },
  disable: {
    color: '$disable',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: '$fontColor',
  },
  imageStyle: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
  },
});

export {Styles, ItemStyles};
