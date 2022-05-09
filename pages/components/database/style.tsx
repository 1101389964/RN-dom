import {StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'blue',
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  item: {
    flexBasis: 60,
    alignItems: 'center',
    margin: 15,
    padding: 5,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  logo: {
    width: 40,
    height: 40,
  },
  //输入栏
  inputContainer: {
    flex: 2,
    backgroundColor: '#e3fede',
  },
  inputLine: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  inputText: {
    marginHorizontal: 10,
    fontSize: 20,
  },
  //数据列表
  datas: {
    flex: 4,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  bodyContainer: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: 'green',
  },
  headerItem: {
    flexBasis: 70,
    alignItems: 'center',
    margin: 14,
    padding: 5,
    height: 35,
    backgroundColor: 'blue',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  bodyline: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
  },
  bodyItem: {
    flex: 1,
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 15,
  },
});
