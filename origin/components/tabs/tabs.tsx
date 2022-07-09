import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
  cloneElement,
  ReactElement,
} from 'react';
import {View, ScrollView, Text} from 'react-native';

import {TabsProps, ItemProps} from './interface';

import {Styles, ItemStyles} from './style';

const Tabs: React.FC<TabsProps> = props => {
  const {direction = 'row', activeKey = 0, onChange, children, style} = props;

  const flexDirection = direction === 'row' ? 'column' : 'row';
  const isfixed = (children as Array<ReactElement>).length <= 5 ? true : false;
  let contents = null; // 存放active状态的Tabsitem的children

  const [activeIndex, setActiveIndex] = useState(activeKey); // 被选中的索引
  const [itemsSide, setItemsSide] = useState({width: 0, height: 0}); // 每个itmes的长宽
  const [itemsFatherSide, setItemsFatherSide] = useState({width: 0, height: 0}); // items父盒子的长宽
  const contentScrollView = useRef<any>();

  function handleChange(index: number) {
    setActiveIndex(index);
    if (!isfixed) {
      goToPage(index);
    }
    onChange && onChange(index);
  }

  // 当子元素超过 5 个自动滚动
  function goToPage(index: number) {
    let length: number; // 子元素个数
    if (direction === 'row') {
      length = Math.round(itemsFatherSide.width / itemsSide.width);
    } else {
      length = Math.round(itemsFatherSide.height / itemsSide.height);
    }
    const halfLength = Math.ceil(length / 2); // 子元素中间位置
    // 当点击的位置超过或小于一般时自动移动，其实点击每个位置都会触发 scrollTo，只不过移动的边界时就不会移动了。
    const jumpSpace = ++index - halfLength;
    if (direction === 'row') {
      contentScrollView.current.scrollTo({
        x: jumpSpace * itemsSide.width,
        animated: true,
      });
    } else {
      contentScrollView.current.scrollTo({
        y: jumpSpace * itemsSide.height,
        animated: true,
      });
    }

    // console.log('halfLength==', halfLength);
    // console.log('itemsFatherSide=', itemsFatherSide, 'itemsSide=', itemsSide);
  }

  const childrens = React.Children.map(children, (item, index) => {
    const childElement = item as React.FunctionComponentElement<ItemProps>;
    // 获取 itemMenu 里面的 displayName 依次来筛选组件是不是 childElement
    if (index === activeIndex) {
      contents = childElement.props.children;
    }
    const {displayName} = childElement.type;
    if (displayName === 'tabsItem') {
      return cloneElement(childElement, {
        index,
        activeKey: activeIndex,
        onChange: handleChange,
        isfixed,
        direction,
        setItemsSide,
      });
    } else {
      console.error(
        'Warning: Menu has a child which is not a MenuItem component',
      );
    }
  });
  // 当大于5个子节点是就改为左右滑动；
  const isScroll =
    (childrens as Array<ReactElement>).length <= 5 ? false : true;

  return (
    <View style={[Styles.container, {flexDirection}, style]}>
      {/**
        由于需要滑动所以需要ScrollView包裹着，
        注：ScrollView 传递 justifyContent 必须在contentContainerStyle中，
        ScrollView 有两层，外面父容器，和里面一层子容器，子容器可以父容器中滚动，
        相当于轮播图的构造，而 contentContainerStyle 是作用在内层的容器上的样式，
        justifyContent是控制子项排布的的方向，所以必须得放在 contentContainerStyle
        这里有个坑，contentContainerStyle 不要设置flex: 1,这样会使子容器会父容器一样宽，
        就无法正常滚动了，会出现回弹现象。

        坑：ScrollView 默认有flexGrow：1, 默认会填充整个父盒子，所以如果需要子容器自适应填充 ScrollView，需要给ScrollView设置flex：1，
      */}
      <View
        onLayout={({
          nativeEvent: {
            layout: {width, height},
          },
        }) => {
          setItemsFatherSide({width, height});
        }}>
        <ScrollView
          ref={contentScrollView}
          horizontal={direction === 'row' ? true : false}
          style={[
            Styles.scrollContainer,
            direction === 'row'
              ? Styles.scrollContainerBorderBottom
              : Styles.scrollContainerBorderRight,
          ]}
          contentContainerStyle={[
            Styles.scrollItemContainer,
            {flexDirection: direction},
            {flex: !isScroll && 1}, // 当小于5个children时就让 ScrollView 内层盒子固定定位
          ]}
          scrollEnabled={isScroll}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {childrens}
        </ScrollView>
      </View>
      <View style={[Styles.bottomContent]}>
        <Text style={ItemStyles.textStyle}>{contents}</Text>
      </View>
    </View>
  );
};

Tabs.defaultProps = {
  direction: 'row',
  activeKey: 0,
};

export default Tabs;
