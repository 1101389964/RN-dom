import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bottom: {
    flex: 3,
    paddingTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  searchWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginHorizontal: 20,
    flexBasis: 25,
    height: 25,
  },
  search: {
    flex: 1,
    height: 40,
    width: 200,
    lineHeight: 23,
    fontSize: 20,
    color: 'rgb(144,144,144)',
    backgroundColor: 'rgb(249,249,249)',
  },
  btn: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#2177b8',
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
  },
  //modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
