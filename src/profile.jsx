import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, StatusBar } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const TopWave = () => (
  <View style={styles.topWaveContainer}>
    <Svg width="150" height="80" viewBox="0 0 150 80" style={styles.wave}>
      <Path
        d="M0,30 C30,10 60,20 90,30 C120,40 150,20 150,30 L150,0 L0,0 Z"
        fill="#FF9933"
      />
    </Svg>
  </View>
);

const BottomWave = () => (
  <View style={styles.bottomWaveContainer}>
    <Svg width="150" height="80" viewBox="0 0 150 80" style={styles.wave}>
      <Path
        d="M0,50 C30,70 60,60 90,50 C120,40 150,60 150,50 L150,80 L0,80 Z"
        fill="#28A745"
      />
    </Svg>
  </View>
);

const UserProfile = () => {
  const [name, setName] = useState('');
  const [sosPassword, setSosPassword] = useState('');
  const [guardianNumber, setGuardianNumber] = useState('');

  const handleSaveProfile = () => {
    if (!name || !sosPassword || !guardianNumber) {
      Alert.alert('Validation Error', 'All fields are required.');
      return;
    }

    // Here you can add logic to save the profile details, e.g., to a backend server or local storage
    Alert.alert('Profile Saved', 'Your profile has been updated successfully!');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TopWave />
      <View style={styles.formContainer}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter Your Name"
          placeholderTextColor="#666"
          style={styles.input}
        />
        <TextInput
          value={sosPassword}
          onChangeText={setSosPassword}
          placeholder="Enter SOS Password"
          placeholderTextColor="#666"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          value={guardianNumber}
          onChangeText={setGuardianNumber}
          placeholder="Enter Guardian Number"
          placeholderTextColor="#666"
          keyboardType="phone-pad"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSaveProfile} style={styles.button}>
          <Text style={styles.buttonText}>Save Profile</Text>
        </TouchableOpacity>
      </View>
      <BottomWave />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  formContainer: {
    width: '80%',
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  topWaveContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 150,
    height: 80,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  bottomWaveContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 150,
    height: 80,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default UserProfile;
