import React , {useState}from 'react';
import {Button, Text, View} from 'react-native';
const App  = () => {
  const [count, set] = useState(0);
  return (
    <View> 
      <Text> Count: {count}</Text>
      <Button title = "OK" onPress={() => set(count + 1)} />
    </View>
  );
};
export default App;