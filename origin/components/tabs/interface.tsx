import React from 'React';

type onChange = (num: number) => void;

type direction = 'row' | 'column';

export interface TabsProps {
  // 横向与纵向
  direction?: direction;

  activeKey?: number;

  onChange?: onChange;

  children?: React.ReactNode;

  items?: React.ReactNode;

  style?: any;
}

export interface ItemProps {
  title: string;

  children?: React.ReactNode;

  disable?: boolean;

  index?: number;

  activeKey?: number;

  onChange?: onChange;

  // Item数量是否小于5
  isfixed?: boolean;

  direction?: direction;
}
