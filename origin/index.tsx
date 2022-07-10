import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import styles from './style';

import {Tabs, TabsItem} from './components/tabs/index';

export default function index() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Tabs
          direction="row"
          /* activeTextStyle={{color: 'blue', fontSize: 30}}
          activeViewStyle={{backgroundColor: 'red', borderColor: 'red'}}
          disaleTextStyle={{color: 'red'}}
          containerStyle={{height: 60, width: 150}}
          disableViewStyle={{backgroundColor: 'green'}} */
        >
          <TabsItem title="1" disable>
            one
          </TabsItem>
          <TabsItem title="2">two</TabsItem>
          <TabsItem title="3">three</TabsItem>
          <TabsItem title="4">four</TabsItem>
          <TabsItem title="5" disable>
            five
          </TabsItem>
          <TabsItem title="6">six</TabsItem>
          <TabsItem title="7">
            <View>
              <Text>hello</Text>
            </View>
          </TabsItem>
          <TabsItem title="8">
            <View style={{flex: 1, backgroundColor: 'red'}}>
              <Text>hhh</Text>
            </View>
          </TabsItem>
          <TabsItem title="9">six</TabsItem>
          <TabsItem title="10">six</TabsItem>
          <TabsItem title="11">six</TabsItem>
        </Tabs>
        {/* <Tabs direction="row" type="image">
          <TabsItem
            title="1"
            source={{
              uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ff4%2F6c%2F1c%2Ff46c1c4d5dbee45fade6a85de81edba9.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660038230&t=28c3a1aec8b53eadad81842bcef69d5a',
            }}>
            one
          </TabsItem>
          <TabsItem title="2">two</TabsItem>
          <TabsItem title="3">three</TabsItem>
        </Tabs> */}
      </View>
    </SafeAreaView>
  );
}
