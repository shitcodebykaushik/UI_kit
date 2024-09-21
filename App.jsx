import React from 'react';
import {Text,View,TextInput, StyleSheet} from 'react-native';

const Red = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.test1}> This is ok</Text>
    <Text style={styles.test1}> This is </Text>
    

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignitems: 'center',
  },
  test1: {
    alignContent:'center',
    backgroundColor: 'green',
    fontWeight: 'bold',
    fontSize:20,
    padding:10,
}
});
export default Red;
