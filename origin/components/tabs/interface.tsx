import React from 'React';
import {
  ViewStyle,
  TextStyle,
  ImageStyle,
  LayoutChangeEvent,
  ScrollViewProps,
} from 'react-native';

type onChange = (index: number) => void;

type direction = 'row' | 'column';

type useState = React.Dispatch<
  React.SetStateAction<{
    width: number;
    height: number;
  }>
>;

export interface TabsProps {
  // 横向与纵向
  direction?: direction;

  // 当前被选中的items
  activeKey?: number;

  // 触发的回调方法
  onChange?: onChange;

  children?: React.ReactNode;

  style?: any;

  /* 这里把样式放在 Tabs 上面是，如果放到items上面，每个样式都需要传递 */
  // items 容器样式
  containerStyle?: ViewStyle;

  // active 状态容器样式
  activeViewStyle?: ViewStyle;

  // active 状态字体样式
  activeTextStyle?: ViewStyle;

  // disable 状态容器样式
  disableViewStyle?: ViewStyle;

  // disable 状态字体样式
  disaleTextStyle?: TextStyle;
}

export interface ItemProps {
  // 顶部标题
  title: string;

  // children
  children: React.ReactNode;

  // 是否禁用
  disable?: boolean;

  // items 当前的索引
  index?: number;

  // active 状态的索引
  activeKey?: number;

  // 触发时的回调方法
  onChange?: onChange;

  // Item 数量是否小于5
  isfixed?: boolean;

  // 设置 Item 的长宽
  setItemsSide?: useState;

  // 横向与纵向
  direction?: direction;

  // items 容器样式
  containerStyle?: ViewStyle;

  // active 状态容器样式
  activeViewStyle?: ViewStyle;

  // active 状态字体样式
  activeTextStyle?: ViewStyle;

  // disable 状态容器样式
  disableViewStyle?: ViewStyle;

  // disable 状态字体样式
  disaleTextStyle?: TextStyle;
}
