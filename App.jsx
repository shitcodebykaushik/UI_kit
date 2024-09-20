import React from "react";
import {View, Text, Button, Alert} from "react-native";
 const LIT = ()=>{
    return(
        <Text> Hi </Text>
    );
 };
 const Uid = () => {
    return (
        <Text>This is the second text</Text>
    );
 };
  const Data = () => {
     return (
       <Button title=" Click here" />
     );
  };

  const Yolo = () => {
    return (
        <View> 
            <Text> This is the beginning of the android development  </Text>
            <Button title=" Here" onPress={()=>Alert.alert ("Button was clicked")} />
            <Text> THis is the second line where we have the view as the parent components </Text>
        </View>
    );
  };

  const App = () => {
    return (
        <View> 
            <LIT/>
                <Uid/> 
                <Data/>
                <Yolo/>
        </View>
    );
  };
  export default App;
