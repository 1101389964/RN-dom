import React, {useState, useEffect} from 'react';
import {
  FlatList,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  Text,
} from 'react-native';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';

import {addData, deleteData, editData} from '../../store/action';

import {datasType, dataType} from '../../store/interfsce';

import InputItem from '../common/input-item';
import Modal from '../common/modal';
import styles from './style';

const baseURl = '../../img/icon/';

const icons = [
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '添加',
    logo: require(`${baseURl}add-circle.png`),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '修改',
    logo: require(`${baseURl}edit.png`),
  },
  {
    id: '58694a0f-3da1-47d96-145571e29d72',
    title: '删除',
    logo: require(`${baseURl}ashbin.png`),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '查询',
    logo: require(`${baseURl}search.png`),
  },
];

const headers = ['ID', '姓名', '学号', '成绩'];

const Header = ({item}) => {
  return (
    <View style={styles.headerItem}>
      <Text style={styles.headerText}>{item}</Text>
    </View>
  );
};

const Body = ({index, item}) => {
  const color = index % 2 === 0 ? '#4e7ca1' : '#8fb2c9';
  return (
    <View style={[styles.bodyline, {backgroundColor: color}]}>
      <View style={styles.bodyItem}>
        <Text style={styles.bodyText}>{index}</Text>
      </View>
      <View style={styles.bodyItem}>
        <Text style={styles.bodyText}>{item.name}</Text>
      </View>
      <View style={styles.bodyItem}>
        <Text style={styles.bodyText}>{item.id}</Text>
      </View>
      <View style={styles.bodyItem}>
        <Text style={styles.bodyText}>{item.grade}</Text>
      </View>
    </View>
  );
};

const App = () => {
  //redux
  const data = useSelector<datasType, dataType[]>(
    //下面函数的返回值会作为useSelector的返回值
    state => state.data,
    shallowEqual, //传入shallowEqual useSelector
  );
  const dipatch = useDispatch();

  //hooks
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [grade, setGrade] = useState('');
  const [showDate, setShowDate] = useState<dataType[]>(data);
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    setShowDate(data);
  }, [data]);

  //自定义方法
  const renderIcons = ({item}) => <Icon props={item} />;
  const renderHeaders = ({item}) => <Header item={item} />;
  const renderBody = ({index, item}) => <Body index={index} item={item} />;

  const dispatchfun = title => {
    switch (title) {
      case '添加':
        const result1 = data.every(item => item.id !== parseInt(id, 10));
        if (result1) {
          if (name.trim() !== '' && grade.trim() !== '') {
            dipatch(
              addData({name, id: parseInt(id, 10), grade: parseInt(grade, 10)}),
            );
            setText('添加成功');
            setVisible(true);
          } else {
            setText('请输入姓名或成绩');
            setVisible(true);
          }
        } else {
          setText('学号已存在');
          setVisible(true);
        }
        break;
      case '删除':
        const result2 = data.find(item => item.id === parseInt(id, 10));
        if (result2) {
          // console.log(parseInt(id, 10), result2);
          dipatch(deleteData(parseInt(id, 10)));
          setText('删除成功');
          setVisible(true);
        } else {
          setText('请输入正确的学号');
          setVisible(true);
        }
        break;
      case '修改':
        const result3 = data.find(item => item.id === parseInt(id, 10));
        if (result3) {
          if (
            typeof parseFloat(grade) === 'number' &&
            parseFloat(grade) <= 100
          ) {
            dipatch(editData({id: parseInt(id, 10), grade: parseFloat(grade)}));
            setText('修改成功');
            setVisible(true);
          } else {
            setText('请输入正确的成绩');
            setVisible(true);
          }
        }
        break;
      case '查询':
        const result4 = data.filter(item => {
          if (id.trim() !== '' && name.trim() !== '' && grade.trim() !== '') {
            return (
              item.id === parseInt(id, 10) &&
              item.grade === parseFloat(grade) &&
              item.name === name
            );
          } else if (
            id.trim() === '' &&
            name.trim() !== '' &&
            grade.trim() !== ''
          ) {
            return item.grade === parseFloat(grade) && item.name === name;
          } else if (
            id.trim() !== '' &&
            name.trim() === '' &&
            grade.trim() !== ''
          ) {
            return (
              item.id === parseInt(id, 10) && item.grade === parseFloat(grade)
            );
          } else if (
            id.trim() !== '' &&
            name.trim() !== '' &&
            grade.trim() === ''
          ) {
            return item.id === parseInt(id, 10) && item.name === name;
          } else if (
            id.trim() === '' &&
            name.trim() === '' &&
            grade.trim() === ''
          ) {
            return true;
          } else {
            return (
              item.id === parseInt(id, 10) ||
              item.grade === parseFloat(grade) ||
              item.name === name
            );
          }
        });
        if (result4.length) {
          setShowDate(result4);
          setText('查询成功');
          setVisible(true);
        } else {
          setText('未查询到');
          setVisible(true);
        }
    }
  };

  const Icon = ({props}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.4}
        onPress={() => {
          dispatchfun(props.title);
        }}>
        <Image style={styles.logo} source={props.logo} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.datas}>
        <View style={styles.headerContainer}>
          <FlatList
            data={headers}
            renderItem={renderHeaders}
            keyExtractor={item => item}
            numColumns={4}
          />
        </View>
        <View style={styles.bodyContainer}>
          <FlatList
            data={showDate}
            renderItem={renderBody}
            keyExtractor={item => item.name}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputLine}>
          <Text style={styles.inputText}>姓名</Text>
          <InputItem
            value={name}
            changeText={setName}
            style={styles.inputItem}
          />
        </View>
        <View style={styles.inputLine}>
          <Text style={styles.inputText}>学号</Text>
          <InputItem value={id} changeText={setId} style={styles.inputItem} />
        </View>
        <View style={styles.inputLine}>
          <Text style={styles.inputText}>成绩</Text>
          <InputItem
            value={grade}
            changeText={setGrade}
            style={styles.inputItem}
          />
        </View>
      </View>
      <FlatList
        data={icons}
        renderItem={renderIcons}
        keyExtractor={item => item.id}
        numColumns={4}
        contentContainerStyle={styles.list}
      />
      <Modal visible={visible} setVisible={setVisible} text={text} />
    </View>
  );
};

export default App;
