import * as React from 'react';
import {Button, View, Text} from 'react-native';

export default function HomeScreen({navigation, route}) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            otherParam: 'anything you want here',
          })
        }
      />
      {/* post参数由下一级路由传递过来 */}
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
    </View>
  );
}
