import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Full Name" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        autoCapitalize="none"
      />
      <Button title="Sign Up" onPress={() => alert('Sign Up pressed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
