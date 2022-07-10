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
        </Tabs>
      </View>
    </SafeAreaView>
  );
}
