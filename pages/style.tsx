import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  top: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  img: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  btnFather: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
  },
  LoginOrRegister: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#eee',
  },
});

export default styles;
