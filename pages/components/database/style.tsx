import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#144a74', //浅色
  },
  list: {
    flex: 1,
    minHeight: 20,
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
    borderColor: '#8a8a8a',
  },
  logo: {
    width: 40,
    height: 40,
  },
  //输入栏
  inputContainer: {
    flex: 1.5,
    minHeight: 60,
    // backgroundColor: '#e3fede',
  },
  inputLine: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  inputText: {
    marginHorizontal: 10,
    fontSize: 20,
  },
  inputItem: {
    backgroundColor: '#8fb2c9', // 浅色
    color: '#222',
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
    backgroundColor: '#144a74', //浅色
  },
  headerItem: {
    flexBasis: 70,
    alignItems: 'center',
    margin: 14,
    padding: 5,
    height: 35,
    backgroundColor: '#2177b8', //浅色
    borderRadius: 10,
  },
  headerText: {
    color: '#111',
    fontSize: 20,
  },
  bodyContainer: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: '#144a74', //浅色
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
