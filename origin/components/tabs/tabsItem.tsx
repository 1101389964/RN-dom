import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {ItemStyles} from './style';

import {ItemProps} from './interface';

const tabsItem: React.FC<ItemProps> = props => {
  const {
    index,
    activeKey,
    disable,
    direction,
    isfixed,
    onChange,
    title,
    setItemsSide,
  } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [side, setSide] = React.useState({width: 0, height: 0});
  return (
    <View
      // onLayout 当组件挂载或者布局变化的时候调用，获取组件的长宽传递给父组件，使点击时 ScrollView 会依据width和height自动滚动；
      onLayout={({
        nativeEvent: {
          layout: {width, height},
        },
      }) => {
        setItemsSide && setItemsSide({width, height});
      }}
      style={[
        ItemStyles.container,
        !disable && index === activeKey && ItemStyles.activeStyle,
        !isfixed && ItemStyles.contaninerLength,
        direction === 'row'
          ? ItemStyles.containerBorderBottom
          : ItemStyles.containerBorderRight,
      ]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          onChange && onChange(index as number);
        }}>
        <Text
          style={[
            ItemStyles.textStyle,
            !disable && index === activeKey && ItemStyles.activeStyle,
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

tabsItem.displayName = 'tabsItem';

export default tabsItem;
