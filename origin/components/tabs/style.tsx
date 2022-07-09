// 使用 EStyleSheet 可以使使用变量
import EStyleSheet from 'react-native-extended-stylesheet';

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
});

const ItemStyles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: '$default_color',
  },
  contaninerLength: {
    width: 80,
    height: 40,
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
});

export {Styles, ItemStyles};
