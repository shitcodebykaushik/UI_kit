import React, { useState, useCallback, useRef, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, Linking, StatusBar } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const emergencyPhoneNumber = 'tel:6239165083'; // Replace with actual emergency number
const correctPassword = 'yourCorrectPassword'; // Replace with your actual password

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

const SOSScreen = () => {
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordFine, setIsPasswordFine] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleStartTravel = () => {
    setShowPasswordInput(true);
    setIsPasswordFine(false);
    startAutoSOSTimer(); // Start 5-second auto-SOS timer if no password is entered
  };

  const handleVerifyPassword = () => {
    if (password === correctPassword) {
      Alert.alert('Happy Journey', 'Have a great trip!');
      clearTimeout(timerRef.current!); // Clear the SOS timer if password is correct
      setIsPasswordFine(true);
    } else {
      Alert.alert('Incorrect Password', 'Sending SOS alert...');
      handleSOSPress();
    }
  };

  const handleSOSPress = useCallback(() => {
    // Automatically open the phone dialer with the emergency number
    Linking.openURL(emergencyPhoneNumber).catch(err => console.error('Failed to open URL:', err));

    Alert.alert('SOS Alert', 'Your SOS alert has been sent!', [{ text: 'OK' }]);
  }, []);

  const startAutoSOSTimer = () => {
    timerRef.current = setTimeout(() => {
      if (!password) {
        Alert.alert('Timeout', 'No password entered. Sending SOS alert...');
        handleSOSPress();
      }
    }, 5 * 1000); // Set to 5 seconds
  };

  useEffect(() => {
    if (password) {
      clearTimeout(timerRef.current!); // Clear SOS timer if password is entered
    }
  }, [password]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TopWave />
      {showPasswordInput ? (
        <View style={styles.formContainer}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Password"
            placeholderTextColor="#666"
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity onPress={handleVerifyPassword} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={handleStartTravel} style={styles.button}>
          <Text style={styles.buttonText}>Start the Tour</Text>
        </TouchableOpacity>
      )}
      {isPasswordFine && <Text style={styles.passwordFineText}>Password is fine. You are safe!</Text>}
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
    marginTop: 20,
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
    backgroundColor: '#FF5733', // A distinct color for SOS
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
  passwordFineText: {
    color: 'green',
    fontSize: 18,
    marginTop: 20,
  },
});

export default SOSScreen;
