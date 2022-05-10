import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    marginVertical: 10,
    height: 40,
    width: 300,
    lineHeight: 30,
    borderRadius: 15,
    overflow: 'hidden',
    fontSize: 25,
    textAlign: 'center',
    color: 'rgb(144,144,144)',
    backgroundColor: 'rgb(249,249,249)',
  },
  searchLogin: {
    marginRight: 15,
    flexBasis: 25,
    height: 25,
  },
  search: {
    flex: 1,
    height: 50,
    width: 200,
    lineHeight: 23,
    fontSize: 20,
    color: 'rgb(144,144,144)',
    backgroundColor: 'rgb(249,249,249)',
  },
});

export default styles;
