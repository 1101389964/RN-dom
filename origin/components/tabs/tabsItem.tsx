import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {ItemStyles} from './style';

import {ItemProps} from './interface';

const tabsItem: React.FC<ItemProps> = props => {
  const {index, activeKey, disable, direction, isfixed, onChange, title} =
    props;
  const [side, setSide] = React.useState({width: 0, height: 0});
  return (
    <View
      style={[
        ItemStyles.container,
        !disable && index === activeKey && ItemStyles.activeStyle,
        !isfixed && ItemStyles.contaninerLength,
        direction === 'row'
          ? ItemStyles.containerBorderBottom
          : ItemStyles.containerBorderRight,
      ]}>
      <TouchableOpacity
        onPress={() => {
          onChange && onChange(index as number);
        }}
        // 当组件挂载或者布局变化的时候调用，获取组件的长宽传递给父组件，使点击 ScrollView 时自动滚动；
        onLayout={({
          nativeEvent: {
            layout: {width},
          },
        }) => {
          console.log(width);
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
