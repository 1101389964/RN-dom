import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

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
    containerStyle,
    activeViewStyle,
    activeTextStyle,
    disableViewStyle,
    disaleTextStyle,
  } = props;

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
        // 这里也需要注意样式的层叠顺序，否则用户传递的样式可能会被覆盖掉
        ItemStyles.container,
        !isfixed && ItemStyles.contaninerLength,
        containerStyle,
        index === activeKey &&
          StyleSheet.compose(ItemStyles.activeViewStyle, activeViewStyle),
        disable && disableViewStyle,
        direction === 'row'
          ? ItemStyles.containerBorderBottom
          : ItemStyles.containerBorderRight,
      ]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          !disable && onChange && onChange(index as number);
        }}>
        <Text
          style={[
            ItemStyles.textStyle,
            index === activeKey &&
              StyleSheet.compose(ItemStyles.activeTextStyle, activeTextStyle),
            disable && StyleSheet.compose(ItemStyles.disable, disaleTextStyle),
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

tabsItem.displayName = 'tabsItem';

export default tabsItem;
