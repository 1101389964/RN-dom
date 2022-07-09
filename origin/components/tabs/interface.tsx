import React from 'React';

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
}

export interface ItemProps {
  title: string;

  children: React.ReactNode;

  disable?: boolean;

  index?: number;

  activeKey?: number;

  onChange?: onChange;

  // Item 数量是否小于5
  isfixed?: boolean;

  // 设置 Item 的长宽
  setItemsSide?: useState;

  direction?: direction;
}
