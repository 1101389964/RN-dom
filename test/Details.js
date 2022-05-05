import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
export default function DetailsScreen({route, navigation}) {
  const {itemId, otherParam} = route.params;

  const [postText, setPostText] = useState('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      {/* 虽然Home没有传递itemId给details，但是在注册路由的时候使用了默认的参数 initialParams */}
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 30, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />

      {/* 使用setParams方法更新传递的参数 */}
      <Button
        title="更新参数"
        onPress={() => {
          navigation.setParams({
            otherParam: 'someText',
          });
        }}
      />

      {/* 在当前页面下使用navigate('Details')会没有反应，使用push方法可以继续同一页面跳转 */}
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      {/*
        即使使用了多个push('Details') 也使用navigate('Home')}跳转回指定的路由页面，Home也就是第一个
        params: {post: postText},是传递的参数，将参数传递给Home,即参数可以从下一级页面传递给上一级页面
      */}
      <Button
        title="Go to Home And Transmit Params"
        onPress={() =>
          navigation.navigate({
            name: 'Home',
            params: {post: postText},
            merge: true,
          })
        }
      />
      {/* goBack可以回到上一次跳转的页面 */}
      <Button title="Go back" onPress={() => navigation.goBack()} />
      {/* popToTop()，它返回到第一个页面。 */}
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
